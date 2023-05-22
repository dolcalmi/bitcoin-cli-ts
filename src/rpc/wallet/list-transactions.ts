// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListTransactionsParams = {
  bitcoind: Bitcoind
  /* If set, should be a valid label name to return only incoming transactions
       with the specified label, or "*" to disable filtering and return all transactions. */
  label?: string
  /* The number of transactions to return */
  count?: number
  /* The number of transactions to skip */
  skip?: number
  /* Include transactions to watch-only addresses (see 'importaddress') */
  include_watchonly?: boolean
}

/**
 * listtransactions ( "label" count skip include_watchonly )
 *
 * If a label name is provided, this will return only incoming transactions paying to addresses with the specified label.
 * Returns up to 'count' most recent transactions skipping the first 'from' transactions.
 *
 */
export function listTransactions(params: ListTransactionsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listtransactions', params: methodParams }, bitcoind)
}
