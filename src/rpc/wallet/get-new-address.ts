// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetNewAddressParams = {
  bitcoind: Bitcoind
  /* The label name for the address to be linked to. It can also be set to the empty string "" to represent the default label. The label does not need to exist, it will be created if there is no label by the given name. */
  label?: string
  /* The address type to use. Options are "legacy", "p2sh-segwit", "bech32", and "bech32m". */
  address_type?: string
}

/**
 * getnewaddress ( "label" "address_type" )
 *
 * Returns a new Bitcoin address for receiving payments.
 * If 'label' is specified, it is added to the address book
 * so payments received with the address will be associated with 'label'.
 *
 */
export function getNewAddress(params: GetNewAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getnewaddress', params: methodParams }, bitcoind)
}
