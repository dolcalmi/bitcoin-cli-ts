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

# Stop the container (if running)
stop_container

# Run the container
docker run  -it  --rm  --detach \
    -v ${PWD}/dev/bitcoind/bitcoin.conf:/data/.bitcoin/bitcoin.conf \
    -p 18443:18443 \
    --name "$container_name" \
    lncm/bitcoind:v22.0

wait_for_container

echo "Creating plop commands"
node ./dev/create-plop-script.js > ./dev/scripts/run-plop.sh

# echo "Running plop commands"
# ./dev/scripts/run-plop.sh
#
# echo "Building library"
# yarn build

# Stop the container
stop_container
