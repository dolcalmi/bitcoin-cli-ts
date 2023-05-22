// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GenerateblockParams = {
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
 * Mine a block with a set of ordered transactions immediately to a specified address or descriptor (before the RPC call returns)
 *
 */
export function generateblock(params: GenerateblockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'generateblock', params: methodParams }, bitcoind)
}
