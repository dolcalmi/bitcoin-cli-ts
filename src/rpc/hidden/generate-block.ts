// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GenerateBlockParams = {
  bitcoind: Bitcoind
  /* The address or descriptor to send the newly generated bitcoin to. */
  output: string
  /* [
       "rawtx/txid",    (string)
       ...
     ] */
  transactions: Array<unknown>
}

/**
 * generateblock "output" ["rawtx/txid",...]
 *
 * Mine a set of ordered transactions to a specified address or descriptor and return the block hash.
 *
 */
export function generateBlock(params: GenerateBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'generateblock', params: methodParams }, bitcoind)
}
