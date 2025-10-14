// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type KeypoolRefillParams = {
  bitcoind: Bitcoind
  /* The new keypool size */
  newsize?: number
}

/**
 * keypoolrefill ( newsize )
 *
 * Refills each descriptor keypool in the wallet up to the specified number of new keys.
 * By default, descriptor wallets have 4 active ranged descriptors ("legacy", "p2sh-segwit", "bech32", "bech32m"), each with 1000 entries.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function keypoolRefill(params: KeypoolRefillParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'keypoolrefill', params: methodParams }, bitcoind)
}
