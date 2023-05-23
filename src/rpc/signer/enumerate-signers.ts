// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type EnumerateSignersParams = {
  bitcoind: Bitcoind
}

/**
 * enumeratesigners
 *
 * Returns a list of external signers from -signer.
 *
 */
export function enumerateSigners(params: EnumerateSignersParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'enumeratesigners', params: methodParams }, bitcoind)
}
