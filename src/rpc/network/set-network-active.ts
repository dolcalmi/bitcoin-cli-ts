// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SetNetworkActiveParams = {
  bitcoind: Bitcoind
  /* true to enable networking, false to disable */
  state: boolean
}

/**
 * setnetworkactive state
 *
 * Disable/enable all p2p network activity.
 *
 */
export function setNetworkActive(params: SetNetworkActiveParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'setnetworkactive', params: methodParams }, bitcoind)
}
