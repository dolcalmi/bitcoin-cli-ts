// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetReceivedByAddressParams = {
  bitcoind: Bitcoind
  /* The bitcoin address for transactions. */
  address: string
  /* Only include transactions confirmed at least this many times. */
  minconf?: number
  /* Include immature coinbase transactions. */
  include_immature_coinbase?: boolean
}

/**
 * getreceivedbyaddress "address" ( minconf include_immature_coinbase )
 *
 * Returns the total amount received by the given address in transactions with at least minconf confirmations.
 *
 */
export function getReceivedByAddress(params: GetReceivedByAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getreceivedbyaddress', params: methodParams },
    bitcoind
  )
}
