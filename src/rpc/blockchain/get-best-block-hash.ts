// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBestBlockHashParams = {
  bitcoind: Bitcoind
}

/**
 * getbestblockhash
 *
 * Returns the hash of the best (tip) block in the most-work fully-validated chain.
 *
 */
export function getBestBlockHash(params: GetBestBlockHashParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getbestblockhash', params: methodParams }, bitcoind)
}
