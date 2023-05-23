// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetTxSpendingPrevoutParams = {
  bitcoind: Bitcoind
  /* [
       {                   (json object)
         "txid": "hex",    (string, required) The transaction id
         "vout": n,        (numeric, required) The output number
       },
       ...
     ] */
  outputs: Array<unknown>
}

/**
 * gettxspendingprevout [{"txid":"hex","vout":n},...]
 *
 * Scans the mempool to find transactions spending any of the given outputs
 *
 */
export function getTxSpendingPrevout(params: GetTxSpendingPrevoutParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'gettxspendingprevout', params: methodParams },
    bitcoind
  )
}
