// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetRawMempoolParams = {
  bitcoind: Bitcoind
  /* True for a json object, false for array of transaction ids */
  verbose?: boolean
  /* If verbose=false, returns a json object with transaction list and mempool sequence number attached. */
  mempool_sequence?: boolean
}

/**
 * getrawmempool ( verbose mempool_sequence )
 *
 * Returns all transaction ids in memory pool as a json array of string transaction ids.
 * Hint: use getmempoolentry to fetch a specific transaction from the mempool.
 *
 */
export function getRawMempool(params: GetRawMempoolParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getrawmempool', params: methodParams }, bitcoind)
}
