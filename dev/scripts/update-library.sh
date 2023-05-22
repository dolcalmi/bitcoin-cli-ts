#!/bin/sh

# Set the container name or ID
container_name="bitcoind"

# Set the maximum number of retries
max_retries=10

# Set the sleep duration between retries (in seconds)
retry_interval=5

# Function to check if the container is running
is_container_running() {
  docker inspect -f '{{.State.Running}}' "$container_name" 2>/dev/null
}

# Function to check if the port/service is available
is_service_available() {
  curl -s http://localhost:18443 >/dev/null 2>&1
}

# Wait for the container and service to become ready
wait_for_container() {
  retries=0
  while [ $retries -lt $max_retries ]; do
    if [ "$(is_container_running)" = "true" ] && is_service_available; then
      echo "Container and service are ready!"
      break
    fi
    echo "Waiting for the container and service to become ready..."
    sleep $retry_interval
    retries=$((retries + 1))
  done

  if [ $retries -eq $max_retries ]; then
    echo "Timed out waiting for the container and service to become ready."
    exit 1
  fi
}

stop_container() {
  echo "Stopping container"
  docker stop -t 0 "$container_name" 2>/dev/null
}

# Function to check if Docker image tag exists
check_docker_image_tag() {
    local image_name="$1"
    local tag="$2"

    # Check if the image tag exists
    docker pull "$image_name:$tag" >/dev/null 2>&1
    local pull_exit_code=$?

    if [ $pull_exit_code -eq 0 ]; then
        echo "Docker image tag '$tag' exists for image '$image_name'."
    else
        echo "Docker image tag '$tag' does not exist for image '$image_name'."
        exit 1
    fi
}

result=$(node dev/scripts/get-next-version.js | jq -r '.next_version, .next_version_tag')
# Check the exit code of the command
exit_code=$?
if [ $exit_code -eq 1 ]; then
  echo "Error: Failed to get the next version. Stopping script."
  exit 1
fi

next_version=$(echo "$result" | sed -n '1p')
next_version_tag=$(echo "$result" | sed -n '2p')

# Check if docker image tag exists
check_docker_image_tag "lncm/bitcoind" "$next_version_tag"

# Stop the container (if running)
stop_container

# Run the container
docker run  -it  --rm  --detach \
    -v ${PWD}/dev/bitcoind/bitcoin.conf:/data/.bitcoin/bitcoin.conf \
    -p 18443:18443 \
    --name "$container_name" \
    "lncm/bitcoind:$next_version_tag"

wait_for_container

echo "Creating plop commands"
node ./dev/scripts/create-plop-script.js > ./dev/scripts/run-plop.sh

echo "Running plop commands"
./dev/scripts/run-plop.sh

# Stop the container
stop_container

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
echo "VERSION_TAG=$next_version_tag" >> $GITHUB_ENV
