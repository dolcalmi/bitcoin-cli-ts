// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetAddressInfoParams = {
  bitcoind: Bitcoind
  /* The bitcoin address for which to get information. */
  address: string
}

/**
 * getaddressinfo "address"
 *
 * Return information about the given bitcoin address.
 * Some of the information will only be present if the address is in the active wallet.
 *
 */
export function getAddressInfo(params: GetAddressInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getaddressinfo', params: methodParams }, bitcoind)
}
