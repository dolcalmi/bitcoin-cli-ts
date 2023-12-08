// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type AddNodeParams = {
  bitcoind: Bitcoind
  /* The address of the peer to connect to */
  node: string
  /* 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once */
  command: string
  /* Attempt to connect using BIP324 v2 transport protocol (ignored for 'remove' command) */
  v2transport?: boolean
}

/**
 * addnode "node" "command" ( v2transport )
 *
 * Attempts to add or remove a node from the addnode list.
 * Or try a connection to a node once.
 * Nodes added using addnode (or -connect) are protected from DoS disconnection and are not required to be
 * full nodes/support SegWit as other outbound peers are (though such peers will not be synced from).
 * Addnode connections are limited to 8 at a time and are counted separately from the -maxconnections limit.
 *
 */
export function addNode(params: AddNodeParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'addnode', params: methodParams }, bitcoind)
}
