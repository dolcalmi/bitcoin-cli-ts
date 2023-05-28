#!/bin/sh

# Set the maximum number of retries
max_retries=10

# Set the sleep duration between retries (in seconds)
retry_interval=5

# Function to check if the port/service is available
is_service_available() {
  curl -s http://localhost:18443 >/dev/null 2>&1
}

# Wait for bitcoind to become ready
wait_for_bitcoind() {
  retries=0
  while [ $retries -lt $max_retries ]; do
    if is_service_available; then
      echo "bitcoind is ready!"
      break
    fi
    echo "Waiting for bitcoind to become ready..."
    sleep $retry_interval
    retries=$((retries + 1))
  done

  if [ $retries -eq $max_retries ]; then
    echo "Timed out waiting for bitcoind to become ready."
    exit 1
  fi
}

result=$(node dev/scripts/get-next-version.js | jq -r '.next_version, .next_version_tag, .next_version_vtag')
# Check the exit code of the command
if [ $? -ne 0 ]; then
  echo "Error: Failed to get the next version. Stopping script."
  exit 1
fi
next_version=$(echo "$result" | sed -n '1p')
next_version_tag=$(echo "$result" | sed -n '2p')
next_version_vtag=$(echo "$result" | sed -n '3p')

download_url="https://bitcoincore.org/bin/bitcoin-core-$next_version_tag/bitcoin-$next_version_tag-x86_64-linux-gnu.tar.gz"
bitcoin_dir="bitcoin-$next_version_tag"
download_path="$bitcoin_dir.tar.gz"

echo "Downloading $download_url -> $download_path"
curl -o $download_path $download_url
tar -xzf "$download_path" && rm -f $download_path
# Check the exit code of the command
if [ $? -ne 0 ]; then
  echo "Error: download and unzip failed."
  exit 1
fi

config_file=$PWD/dev/bitcoind/bitcoin.conf
pid_file=$PWD/dev/bitcoind/bitcoind.pid
bitcoind_path=./$bitcoin_dir/bin

$bitcoind_path/bitcoind -conf=$config_file -pid=$pid_file -daemon

wait_for_bitcoind

echo "Creating plop commands"
BITCOIND_PATH=$bitcoind_path BITCOIND_CONFIG=$config_file node ./dev/scripts/create-plop-script.js > ./dev/scripts/run-plop.sh

echo "Running plop commands"
BITCOIND_PATH=$bitcoind_path BITCOIND_CONFIG=$config_file ./dev/scripts/run-plop.sh

# Stop bitcoind
kill $(cat $pid_file)
rm -rf $bitcoin_dir

echo "Building library"
yarn build
# Check the exit code of the command
exit_code=$?
if [ $exit_code -eq 1 ]; then
  echo "Error: Build failed."
  exit 1
fi

echo "Updating package version to $next_version"
yarn version --new-version "$next_version" --no-git-tag-version

# Set the environment variable using echo
echo "VERSION_TAG=$next_version_vtag" >> $GITHUB_ENV
