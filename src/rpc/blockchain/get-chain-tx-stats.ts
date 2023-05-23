// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetChainTxStatsParams = {
  bitcoind: Bitcoind
  /* Size of the window in number of blocks */
  nblocks?: number
  /* The hash of the block that ends the window. */
  blockhash?: string
}

/**
 * getchaintxstats ( nblocks "blockhash" )
 *
 * Compute statistics about the total number and rate of transactions in the chain.
 *
 */
export function getChainTxStats(params: GetChainTxStatsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getchaintxstats', params: methodParams }, bitcoind)
}
