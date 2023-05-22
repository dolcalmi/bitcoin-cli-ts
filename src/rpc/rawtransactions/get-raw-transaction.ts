// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetRawTransactionParams = {
  bitcoind: Bitcoind
  /* The transaction id */
  txid: string
  /* If false, return a string, otherwise return a json object */
  verbose?: boolean
  /* The block in which to look for the transaction */
  blockhash?: string
}

/**
 * getrawtransaction "txid" ( verbose "blockhash" )
 *
 * Return the raw transaction data.
 * By default this function only works for mempool transactions. When called with a blockhash
 * argument, getrawtransaction will return the transaction if the specified block is available and
 * the transaction is found in that block. When called without a blockhash argument, getrawtransaction
 * will return the transaction if it is in the mempool, or if -txindex is enabled and the transaction
 * is in a block in the blockchain.
 * Hint: Use gettransaction for wallet transactions.
 * If verbose is 'true', returns an Object with information about 'txid'.
 * If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.
 *
 */
export function getRawTransaction(params: GetRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getrawtransaction', params: methodParams },
    bitcoind
  )
}
