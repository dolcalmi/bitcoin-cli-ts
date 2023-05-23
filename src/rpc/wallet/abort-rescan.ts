// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type AbortRescanParams = {
  bitcoind: Bitcoind
}

/**
 * abortrescan
 *
 * Stops current wallet rescan triggered by an RPC call, e.g. by an importprivkey call.
 * Note: Use "getwalletinfo" to query the scanning progress.
 *
 */
export function abortRescan(params: AbortRescanParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'abortrescan', params: methodParams }, bitcoind)
}
