// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetUnconfirmedBalanceParams = {
  bitcoind: Bitcoind
}

/**
 * getunconfirmedbalance
 *
 * DEPRECATED
 * Identical to getbalances().mine.untrusted_pending
 *
 */
export function getUnconfirmedBalance(params: GetUnconfirmedBalanceParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getunconfirmedbalance', params: methodParams },
    bitcoind
  )
}
