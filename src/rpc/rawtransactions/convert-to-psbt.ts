// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ConvertToPsbtParams = {
  bitcoind: Bitcoind
  /* The hex string of a raw transaction */
  hexstring: string
  /* If true, any signatures in the input will be discarded and conversion
       will continue. If false, RPC will fail if any signatures are present. */
  permitsigdata?: boolean
  /* Whether the transaction hex is a serialized witness transaction.
       If iswitness is not present, heuristic tests will be used in decoding.
       If true, only witness deserialization will be tried.
       If false, only non-witness deserialization will be tried.
       This boolean should reflect whether the transaction has inputs
       (e.g. fully valid, or on-chain transactions), if known by the caller. */
  iswitness?: boolean
}

/**
 * converttopsbt "hexstring" ( permitsigdata iswitness )
 *
 * Converts a network serialized transaction to a PSBT. This should be used only with createrawtransaction and fundrawtransaction
 * createpsbt and walletcreatefundedpsbt should be used for new applications.
 *
 */
export function convertToPsbt(params: ConvertToPsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'converttopsbt', params: methodParams }, bitcoind)
}
