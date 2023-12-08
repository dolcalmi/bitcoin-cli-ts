// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type AddMultisigAddressParams = {
  bitcoind: Bitcoind
  /* The number of required signatures out of the n keys or addresses. */
  nrequired: number
  /* [
       "key",      (string) bitcoin address or hex-encoded public key
       ...
     ] */
  keys: Array<unknown>
  /* A label to assign the addresses to. */
  label?: string
  /* The address type to use. Options are "legacy", "p2sh-segwit", and "bech32". */
  address_type?: string
}

/**
 * addmultisigaddress nrequired ["key",...] ( "label" "address_type" )
 *
 * Add an nrequired-to-sign multisignature address to the wallet. Requires a new wallet backup.
 * Each key is a Bitcoin address or hex-encoded public key.
 * This functionality is only intended for use with non-watchonly addresses.
 * See `importaddress` for watchonly p2sh address support.
 * If 'label' is specified, assign address to that label.
 * Note: This command is only compatible with legacy wallets.
 *
 */
export function addMultisigAddress(params: AddMultisigAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'addmultisigaddress', params: methodParams },
    bitcoind
  )
}
