// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetNetTotalsParams = {
  bitcoind: Bitcoind
}

/**
 * getnettotals
 *
 * Returns information about network traffic, including bytes in, bytes out,
 * and current system time.
 *
 */
export function getNetTotals(params: GetNetTotalsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getnettotals', params: methodParams }, bitcoind)
}
