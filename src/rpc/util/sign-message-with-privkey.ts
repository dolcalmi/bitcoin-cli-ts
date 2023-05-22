// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SignMessageWithPrivkeyParams = {
  bitcoind: Bitcoind
  /* The private key to sign the message with. */
  privkey: string
  /* The message to create a signature of. */
  message: string
}

/**
 * signmessagewithprivkey "privkey" "message"
 *
 * Sign a message with the private key of an address
 *
 */
export function signMessageWithPrivkey(params: SignMessageWithPrivkeyParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'signmessagewithprivkey', params: methodParams },
    bitcoind
  )
}
