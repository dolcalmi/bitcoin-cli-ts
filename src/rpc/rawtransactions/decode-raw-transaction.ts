// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DecodeRawTransactionParams = {
  bitcoind: Bitcoind
  /* The transaction hex string */
  hexstring: string
  /* Whether the transaction hex is a serialized witness transaction.
       If iswitness is not present, heuristic tests will be used in decoding.
       If true, only witness deserialization will be tried.
       If false, only non-witness deserialization will be tried.
       This boolean should reflect whether the transaction has inputs
       (e.g. fully valid, or on-chain transactions), if known by the caller. */
  iswitness?: boolean
}

/**
 * decoderawtransaction "hexstring" ( iswitness )
 *
 * Return a JSON object representing the serialized, hex-encoded transaction.
 *
 */
export function decodeRawTransaction(params: DecodeRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'decoderawtransaction', params: methodParams },
    bitcoind
  )
}
