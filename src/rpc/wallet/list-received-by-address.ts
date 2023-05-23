// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListReceivedByAddressParams = {
  bitcoind: Bitcoind
  /* The minimum number of confirmations before payments are included. */
  minconf?: number
  /* Whether to include addresses that haven't received any payments. */
  include_empty?: boolean
  /* Whether to include watch-only addresses (see 'importaddress') */
  include_watchonly?: boolean
  /* If present and non-empty, only return information on this address. */
  address_filter?: string
  /* Include immature coinbase transactions. */
  include_immature_coinbase?: boolean
}

/**
 * listreceivedbyaddress ( minconf include_empty include_watchonly "address_filter" include_immature_coinbase )
 *
 * List balances by receiving address.
 *
 */
export function listReceivedByAddress(params: ListReceivedByAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'listreceivedbyaddress', params: methodParams },
    bitcoind
  )
}
