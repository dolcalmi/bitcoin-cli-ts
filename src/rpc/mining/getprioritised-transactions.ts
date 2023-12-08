// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetprioritisedTransactionsParams = {
  bitcoind: Bitcoind
}

/**
 * getprioritisedtransactions
 *
 * Returns a map of all user-created (see prioritisetransaction) fee deltas by txid, and whether the tx is present in mempool.
 *
 */
export function getprioritisedTransactions(
  params: GetprioritisedTransactionsParams
) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getprioritisedtransactions', params: methodParams },
    bitcoind
  )
}
