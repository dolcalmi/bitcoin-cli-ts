// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetNetworkInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getnetworkinfo
 *
 * Returns an object containing various state info regarding P2P networking.
 *
 */
export function getNetworkInfo(params: GetNetworkInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getnetworkinfo', params: methodParams }, bitcoind)
}
