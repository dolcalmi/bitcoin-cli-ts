// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WalletPassphraseChangeParams = {
  bitcoind: Bitcoind
  /* The current passphrase */
  oldpassphrase: string
  /* The new passphrase */
  newpassphrase: string
}

/**
 * walletpassphrasechange "oldpassphrase" "newpassphrase"
 *
 * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
 *
 */
export function walletPassphraseChange(params: WalletPassphraseChangeParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'walletpassphrasechange', params: methodParams },
    bitcoind
  )
}
