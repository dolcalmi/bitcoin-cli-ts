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
       "address",    (string) bitcoin address
       ...
     ] */
  addresses?: Array<unknown>
  /* Include outputs that are not safe to spend
       See description of "safe" attribute below. */
  include_unsafe?: boolean
  /* Options object that can be used to pass named arguments, listed below. */
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
