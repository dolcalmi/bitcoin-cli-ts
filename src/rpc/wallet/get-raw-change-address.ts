// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetRawChangeAddressParams = {
  bitcoind: Bitcoind
  /* The address type to use. Options are "legacy", "p2sh-segwit", and "bech32". */
  address_type?: string
}

/**
 * getrawchangeaddress ( "address_type" )
 *
 * Returns a new Bitcoin address, for receiving change.
 * This is for use with raw transactions, NOT normal use.
 *
 */
export function getRawChangeAddress(params: GetRawChangeAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getrawchangeaddress', params: methodParams },
    bitcoind
  )
}
