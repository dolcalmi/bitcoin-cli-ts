// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetTxOutParams = {
  bitcoind: Bitcoind
  /* The transaction id */
  txid: string
  /* vout number */
  n: number
  /* Whether to include the mempool. Note that an unspent output that is spent in the mempool won't appear. */
  include_mempool?: boolean
}

/**
 * gettxout "txid" n ( include_mempool )
 *
 * Returns details about an unspent transaction output.
 *
 */
export function getTxOut(params: GetTxOutParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'gettxout', params: methodParams }, bitcoind)
}
