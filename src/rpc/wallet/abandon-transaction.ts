// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type AbandonTransactionParams = {
  bitcoind: Bitcoind
  /* The transaction id */
  txid: string
}

/**
 * abandontransaction "txid"
 *
 * Mark in-wallet transaction <txid> as abandoned
 * This will mark this transaction and all its in-wallet descendants as abandoned which will allow
 * for their inputs to be respent.  It can be used to replace "stuck" or evicted transactions.
 * It only works on transactions which are not included in a block and are not currently in the mempool.
 * It has no effect on transactions which are already abandoned.
 *
 */
export function abandonTransaction(params: AbandonTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'abandontransaction', params: methodParams },
    bitcoind
  )
}
