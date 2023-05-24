// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ReconsiderBlockParams = {
  bitcoind: Bitcoind
  /* the hash of the block to reconsider */
  blockhash: string
}

/**
 * reconsiderblock "blockhash"
 *
 * Removes invalidity status of a block, its ancestors and its descendants, reconsider them for activation.
 * This can be used to undo the effects of invalidateblock.
 *
 */
export function reconsiderBlock(params: ReconsiderBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'reconsiderblock', params: methodParams }, bitcoind)
}
