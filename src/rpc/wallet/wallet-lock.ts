// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WalletLockParams = {
  bitcoind: Bitcoind
}

/**
 * walletlock
 *
 * Removes the wallet encryption key from memory, locking the wallet.
 * After calling this method, you will need to call walletpassphrase again
 * before being able to call any methods which require the wallet to be unlocked.
 *
 */
export function walletLock(params: WalletLockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'walletlock', params: methodParams }, bitcoind)
}
