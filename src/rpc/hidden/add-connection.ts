// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type AddConnectionParams = {
  bitcoind: Bitcoind
  /* The IP address and port to attempt connecting to. */
  address: string
  /* Type of connection to open ("outbound-full-relay", "block-relay-only", "addr-fetch" or "feeler"). */
  connection_type: string
  /* Attempt to connect using BIP324 v2 transport protocol */
  v2transport: boolean
}

/**
 * addconnection "address" "connection_type" v2transport
 *
 * Open an outbound connection to a specified node. This RPC is for testing only.
 *
 */
export function addConnection(params: AddConnectionParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'addconnection', params: methodParams }, bitcoind)
}
