// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetConnectionCountParams = {
  bitcoind: Bitcoind
}

/**
 * getconnectioncount
 *
 * Returns the number of connections to other nodes.
 *
 */
export function getConnectionCount(params: GetConnectionCountParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getconnectioncount', params: methodParams },
    bitcoind
  )
}
