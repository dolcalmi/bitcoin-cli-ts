// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetRawTransactionParams = {
  bitcoind: Bitcoind
  /* The transaction id */
  txid: string
  /* 0 for hex-encoded data, 1 for a JSON object, and 2 for JSON object with fee and prevout */
  verbosity?: number
  /* The block in which to look for the transaction */
  blockhash?: string
}

/**
 * getrawtransaction "txid" ( verbosity "blockhash" )
 *
 * By default, this call only returns a transaction if it is in the mempool. If -txindex is enabled
 * and no blockhash argument is passed, it will return the transaction if it is in the mempool or any block.
 * If a blockhash argument is passed, it will return the transaction if
 * the specified block is available and the transaction is in that block.
 * Hint: Use gettransaction for wallet transactions.
 * If verbosity is 0 or omitted, returns the serialized transaction as a hex-encoded string.
 * If verbosity is 1, returns a JSON Object with information about the transaction.
 * If verbosity is 2, returns a JSON Object with information about the transaction, including fee and prevout information.
 *
 */
export function getRawTransaction(params: GetRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getrawtransaction', params: methodParams },
    bitcoind
  )
}
