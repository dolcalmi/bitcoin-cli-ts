// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockCountParams = {
  bitcoind: Bitcoind
}

/**
 * getblockcount
 *
 * Returns the height of the most-work fully-validated chain.
 * The genesis block has height 0.
 *
 */
export function getBlockCount(params: GetBlockCountParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblockcount', params: methodParams }, bitcoind)
}
