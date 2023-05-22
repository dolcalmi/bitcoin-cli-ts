// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type CombineRawTransactionParams = {
  bitcoind: Bitcoind
  /* [
       "hexstring",    (string) A hex-encoded raw transaction
       ...
     ] */
  txs: Array<unknown>
}

/**
 * combinerawtransaction ["hexstring",...]
 *
 * Combine multiple partially signed transactions into one transaction.
 * The combined transaction may be another partially signed transaction or a
 * fully signed transaction.
 *
 */
export function combineRawTransaction(params: CombineRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'combinerawtransaction', params: methodParams },
    bitcoind
  )
}
