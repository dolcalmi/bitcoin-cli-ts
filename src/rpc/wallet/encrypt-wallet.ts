// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type EncryptWalletParams = {
  bitcoind: Bitcoind
  /* The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long. */
  passphrase: string
}

/**
 * encryptwallet "passphrase"
 *
 * Encrypts the wallet with 'passphrase'. This is for first time encryption.
 * After this, any calls that interact with private keys such as sending or signing
 * will require the passphrase to be set prior the making these calls.
 * Use the walletpassphrase call for this, and then walletlock call.
 * If the wallet is already encrypted, use the walletpassphrasechange call.
 *
 */
export function encryptWallet(params: EncryptWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'encryptwallet', params: methodParams }, bitcoind)
}
