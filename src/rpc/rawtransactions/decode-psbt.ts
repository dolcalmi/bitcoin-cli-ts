// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DecodePsbtParams = {
  bitcoind: Bitcoind
  /* The PSBT base64 string */
  psbt: string
}

/**
 * decodepsbt "psbt"
 *
 * Return a JSON object representing the serialized, base64-encoded partially signed Bitcoin transaction.
 *
 */
export function decodePsbt(params: DecodePsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'decodepsbt', params: methodParams }, bitcoind)
}
