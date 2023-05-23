// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetAddedNodeInfoParams = {
  bitcoind: Bitcoind
  /* If provided, return information about this specific node, otherwise all nodes are returned. */
  node?: string
}

/**
 * getaddednodeinfo ( "node" )
 *
 * Returns information about the given added node, or all added nodes
 * (note that onetry addnodes are not listed here)
 *
 */
export function getAddedNodeInfo(params: GetAddedNodeInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getaddednodeinfo', params: methodParams }, bitcoind)
}
