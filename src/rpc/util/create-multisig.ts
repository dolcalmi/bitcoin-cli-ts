// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type CreateMultisigParams = {
  bitcoind: Bitcoind
  /* The number of required signatures out of the n keys. */
  nrequired: number
  /* [
       "key",      (string) The hex-encoded public key
       ...
     ] */
  keys: Array<unknown>
  /* The address type to use. Options are "legacy", "p2sh-segwit", and "bech32". */
  address_type?: string
}

/**
 * createmultisig nrequired ["key",...] ( "address_type" )
 *
 * Creates a multi-signature address with n signature of m keys required.
 * It returns a json object with the address and redeemScript.
 *
 */
export function createMultisig(params: CreateMultisigParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'createmultisig', params: methodParams }, bitcoind)
}
