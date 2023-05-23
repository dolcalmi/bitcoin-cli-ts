// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DecodeScriptParams = {
  bitcoind: Bitcoind
  /* the hex-encoded script */
  hexstring: string
}

/**
 * decodescript "hexstring"
 *
 * Decode a hex-encoded script.
 *
 */
export function decodeScript(params: DecodeScriptParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'decodescript', params: methodParams }, bitcoind)
}
