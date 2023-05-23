// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DisconnectNodeParams = {
  bitcoind: Bitcoind
  /* The IP address/port of the node */
  address?: string
  /* The node ID (see getpeerinfo for node IDs) */
  nodeid?: number
}

/**
 * disconnectnode ( "address" nodeid )
 *
 * Immediately disconnects from the specified peer node.
 * Strictly one out of 'address' and 'nodeid' can be provided to identify the node.
 * To disconnect by nodeid, either set 'address' to the empty string, or call using the named 'nodeid' argument only.
 *
 */
export function disconnectNode(params: DisconnectNodeParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'disconnectnode', params: methodParams }, bitcoind)
}
