// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type PreciousBlockParams = {
  bitcoind: Bitcoind
  /* the hash of the block to mark as precious */
  blockhash: string
}

/**
 * preciousblock "blockhash"
 *
 * Treats a block as if it were received before others with the same work.
 * A later preciousblock call can override the effect of an earlier one.
 * The effects of preciousblock are not retained across restarts.
 *
 */
export function preciousBlock(params: PreciousBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'preciousblock', params: methodParams }, bitcoind)
}
