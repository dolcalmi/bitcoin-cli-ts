// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type VerifyMessageParams = {
  bitcoind: Bitcoind
  /* The bitcoin address to use for the signature. */
  address: string
  /* The signature provided by the signer in base 64 encoding (see signmessage). */
  signature: string
  /* The message that was signed. */
  message: string
}

/**
 * verifymessage "address" "signature" "message"
 *
 * Verify a signed message.
 *
 */
export function verifyMessage(params: VerifyMessageParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'verifymessage', params: methodParams }, bitcoind)
}
