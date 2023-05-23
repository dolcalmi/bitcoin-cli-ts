// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type SimulateRawTransactionParams = {
  bitcoind: Bitcoind
  /* [
       "rawtx",                      (string)
       ...
     ] */
  rawtxs?: Array<unknown>
  /* {
       "include_watchonly": bool,    (boolean, optional, default=true for watch-only wallets, otherwise false) Whether to include watch-only addresses (see RPC importaddress)
       ...
     } */
  options?: Json
}

/**
 * simulaterawtransaction ( ["rawtx",...] {"include_watchonly":bool,...} )
 *
 * Calculate the balance change resulting in the signing and broadcasting of the given transaction(s).
 *
 */
export function simulateRawTransaction(params: SimulateRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'simulaterawtransaction', params: methodParams },
    bitcoind
  )
}
