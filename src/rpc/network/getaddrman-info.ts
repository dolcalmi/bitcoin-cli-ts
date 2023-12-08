// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetaddrmanInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getaddrmaninfo
 *
 * Provides information about the node's address manager by returning the number of addresses in the `new` and `tried` tables and their sum for all networks.
 *
 */
export function getaddrmanInfo(params: GetaddrmanInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getaddrmaninfo', params: methodParams }, bitcoind)
}
