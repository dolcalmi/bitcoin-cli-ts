// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WalletPassphraseParams = {
  bitcoind: Bitcoind
  /* The wallet passphrase */
  passphrase: string
  /* The time to keep the decryption key in seconds; capped at 100000000 (~3 years). */
  timeout: number
}

/**
 * walletpassphrase "passphrase" timeout
 *
 * Stores the wallet decryption key in memory for 'timeout' seconds.
 * This is needed prior to performing transactions related to private keys such as sending bitcoins
 * Note:
 * Issuing the walletpassphrase command while the wallet is already unlocked will set a new unlock
 * time that overrides the old one.
 *
 */
export function walletPassphrase(params: WalletPassphraseParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'walletpassphrase', params: methodParams }, bitcoind)
}
