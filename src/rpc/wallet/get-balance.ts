// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBalanceParams = {
  bitcoind: Bitcoind
  /* Remains for backward compatibility. Must be excluded or set to "*". */
  dummy?: string
  /* Only include transactions confirmed at least this many times. */
  minconf?: number
  /* Also include balance in watch-only addresses (see 'importaddress') */
  include_watchonly?: boolean
  /* (only available if avoid_reuse wallet flag is set) Do not include balance in dirty outputs; addresses are considered dirty if they have previously been used in a transaction. */
  avoid_reuse?: boolean
}

/**
 * getbalance ( "dummy" minconf include_watchonly avoid_reuse )
 *
 * Returns the total available balance.
 * The available balance is what the wallet considers currently spendable, and is
 * thus affected by options which limit spendability such as -spendzeroconfchange.
 *
 */
export function getBalance(params: GetBalanceParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getbalance', params: methodParams }, bitcoind)
}
