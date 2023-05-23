// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type PrioritiseTransactionParams = {
  bitcoind: Bitcoind
  /* The transaction id. */
  txid: string
  /* API-Compatibility for previous API. Must be zero or null.
       DEPRECATED. For forward compatibility use named arguments and omit this parameter. */
  dummy?: number
  /* The fee value (in satoshis) to add (or subtract, if negative).
       Note, that this value is not a fee rate. It is a value to modify absolute fee of the TX.
       The fee is not actually paid, only the algorithm for selecting transactions into a block
       considers the transaction as it would have paid a higher (or lower) fee. */
  fee_delta: number
}

/**
 * prioritisetransaction "txid" ( dummy ) fee_delta
 *
 * Accepts the transaction into mined blocks at a higher (or lower) priority
 *
 */
export function prioritiseTransaction(params: PrioritiseTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'prioritisetransaction', params: methodParams },
    bitcoind
  )
}
