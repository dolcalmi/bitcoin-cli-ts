// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type StopParams = {
  bitcoind: Bitcoind
}

/**
 * stop
 *
 * Request a graceful shutdown of Bitcoin Core.
 *
 */
export function stop(params: StopParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'stop', params: methodParams }, bitcoind)
}
