// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetMempoolDescendantsParams = {
  bitcoind: Bitcoind
  /* The transaction id (must be in mempool) */
  txid: string
  /* True for a json object, false for array of transaction ids */
  verbose?: boolean
}

/**
 * getmempooldescendants "txid" ( verbose )
 *
 * If txid is in the mempool, returns all in-mempool descendants.
 *
 */
export function getMempoolDescendants(params: GetMempoolDescendantsParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getmempooldescendants', params: methodParams },
    bitcoind
  )
}
