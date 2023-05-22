// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SignMessageParams = {
  bitcoind: Bitcoind
  /* The bitcoin address to use for the private key. */
  address: string
  /* The message to create a signature of. */
  message: string
}

/**
 * signmessage "address" "message"
 *
 * Sign a message with the private key of an address
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function signMessage(params: SignMessageParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'signmessage', params: methodParams }, bitcoind)
}
