// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type InvalidateBlockParams = {
  bitcoind: Bitcoind
  /* the hash of the block to mark as invalid */
  blockhash: string
}

/**
 * invalidateblock "blockhash"
 *
 * Permanently marks a block as invalid, as if it violated a consensus rule.
 *
 */
export function invalidateBlock(params: InvalidateBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'invalidateblock', params: methodParams }, bitcoind)
}
