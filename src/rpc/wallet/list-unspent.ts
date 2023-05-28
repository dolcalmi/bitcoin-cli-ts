// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type ListUnspentParams = {
  bitcoind: Bitcoind
  /* The minimum confirmations to filter */
  minconf?: number
  /* The maximum confirmations to filter */
  maxconf?: number
  /* [
       "address",                            (string) bitcoin address
       ...
     ] */
  addresses?: Array<unknown>
  /* Include outputs that are not safe to spend
       See description of "safe" attribute below. */
  include_unsafe?: boolean
  /* {
       "minimumAmount": amount,              (numeric or string, optional, default="0.00") Minimum value of each UTXO in BTC
       "maximumAmount": amount,              (numeric or string, optional, default=unlimited) Maximum value of each UTXO in BTC
       "maximumCount": n,                    (numeric, optional, default=unlimited) Maximum number of UTXOs
       "minimumSumAmount": amount,           (numeric or string, optional, default=unlimited) Minimum sum value of all UTXOs in BTC
       "include_immature_coinbase": bool,    (boolean, optional, default=false) Include immature coinbase UTXOs
     } */
  query_options?: Json
}

/**
 * listunspent ( minconf maxconf ["address",...] include_unsafe query_options )
 *
 * Returns array of unspent transaction outputs
 * with between minconf and maxconf (inclusive) confirmations.
 * Optionally filter to only include txouts paid to specified addresses.
 *
 */
export function listUnspent(params: ListUnspentParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listunspent', params: methodParams }, bitcoind)
}
