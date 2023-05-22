// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockHashParams = {
  bitcoind: Bitcoind
  /* The height index */
  height: number
}

/**
 * getblockhash height
 *
 * Returns hash of block in best-block-chain at height provided.
 *
 */
export function getBlockHash(params: GetBlockHashParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblockhash', params: methodParams }, bitcoind)
}
