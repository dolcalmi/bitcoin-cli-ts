// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListSinceBlockParams = {
  bitcoind: Bitcoind
  /* If set, the block hash to list transactions since, otherwise list all transactions. */
  blockhash?: string
  /* Return the nth block hash from the main chain. e.g. 1 would mean the best block hash. Note: this is not used as a filter, but only affects [lastblock] in the return value */
  target_confirmations?: number
  /* Include transactions to watch-only addresses (see 'importaddress') */
  include_watchonly?: boolean
  /* Show transactions that were removed due to a reorg in the "removed" array
       (not guaranteed to work on pruned nodes) */
  include_removed?: boolean
  /* Also add entries for change outputs. */
  include_change?: boolean
  /* Return only incoming transactions paying to addresses with the specified label. */
  label?: string
}

/**
 * listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed include_change "label" )
 *
 * Get all transactions in blocks since block [blockhash], or all transactions if omitted.
 * If "blockhash" is no longer a part of the main chain, transactions from the fork point onward are included.
 * Additionally, if include_removed is set, transactions affecting the wallet which were removed are returned in the "removed" array.
 *
 */
export function listSinceBlock(params: ListSinceBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listsinceblock', params: methodParams }, bitcoind)
}
