// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type PruneBlockchainParams = {
  bitcoind: Bitcoind
  /* The block height to prune up to. May be set to a discrete height, or to a UNIX epoch time
       to prune blocks whose block time is at least 2 hours older than the provided timestamp. */
  height: number
}

/**
 * pruneblockchain height
 *
 * pruneblockchain
 */
export function pruneBlockchain(params: PruneBlockchainParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'pruneblockchain', params: methodParams }, bitcoind)
}
