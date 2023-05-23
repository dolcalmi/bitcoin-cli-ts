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
 * Fills the keypool.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function keypoolRefill(params: KeypoolRefillParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'keypoolrefill', params: methodParams }, bitcoind)
}
