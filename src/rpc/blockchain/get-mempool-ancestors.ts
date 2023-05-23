// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetMempoolAncestorsParams = {
  bitcoind: Bitcoind
  /* The transaction id (must be in mempool) */
  txid: string
  /* True for a json object, false for array of transaction ids */
  verbose?: boolean
}

/**
 * getmempoolancestors "txid" ( verbose )
 *
 * If txid is in the mempool, returns all in-mempool ancestors.
 *
 */
export function getMempoolAncestors(params: GetMempoolAncestorsParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getmempoolancestors', params: methodParams },
    bitcoind
  )
}
