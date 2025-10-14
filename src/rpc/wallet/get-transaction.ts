// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetTransactionParams = {
  bitcoind: Bitcoind
  /* The transaction id */
  txid: string
  /* (DEPRECATED) No longer used */
  include_watchonly?: boolean
  /* Whether to include a `decoded` field containing the decoded transaction (equivalent to RPC decoderawtransaction) */
  verbose?: boolean
}

/**
 * gettransaction "txid" ( include_watchonly verbose )
 *
 * Get detailed information about in-wallet transaction <txid>
 *
 */
export function getTransaction(params: GetTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'gettransaction', params: methodParams }, bitcoind)
}
