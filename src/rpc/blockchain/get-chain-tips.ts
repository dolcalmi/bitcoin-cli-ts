// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetChainTipsParams = {
  bitcoind: Bitcoind
}

/**
 * getchaintips
 *
 * Return information about all known tips in the block tree, including the main chain as well as orphaned branches.
 *
 */
export function getChainTips(params: GetChainTipsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getchaintips', params: methodParams }, bitcoind)
}
