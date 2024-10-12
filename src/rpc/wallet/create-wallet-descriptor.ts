// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type CreateWalletDescriptorParams = {
  bitcoind: Bitcoind
  /* The address type the descriptor will produce. Options are "legacy", "p2sh-segwit", "bech32", and "bech32m". */
  type: string
  /* Options object that can be used to pass named arguments, listed below. */
  options?: Json
}

/**
 * createwalletdescriptor "type" ( {"internal":bool,"hdkey":"str",...} )
 *
 * Creates the wallet's descriptor for the given address type. The address type must be one that the wallet does not already have a descriptor for.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function createWalletDescriptor(params: CreateWalletDescriptorParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'createwalletdescriptor', params: methodParams },
    bitcoind
  )
}
