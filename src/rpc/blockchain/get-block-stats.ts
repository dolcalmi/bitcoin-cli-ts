// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockStatsParams = {
  bitcoind: Bitcoind
  /* The block hash or height of the target block */
  hash_or_height: string | number
  /* [
       "height",     (string) Selected statistic
       "time",       (string) Selected statistic
       ...
     ] */
  stats?: Array<unknown>
}

/**
 * getblockstats hash_or_height ( stats )
 *
 * Compute per block statistics for a given window. All amounts are in satoshis.
 * It won't work for some heights with pruning.
 *
 */
export function getBlockStats(params: GetBlockStatsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblockstats', params: methodParams }, bitcoind)
}
