// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetMempoolEntryParams = {
  bitcoind: Bitcoind
  /* The transaction id (must be in mempool) */
  txid: string
}

/**
 * getmempoolentry "txid"
 *
 * Returns mempool data for given transaction
 *
 */
export function getMempoolEntry(params: GetMempoolEntryParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getmempoolentry', params: methodParams }, bitcoind)
}
