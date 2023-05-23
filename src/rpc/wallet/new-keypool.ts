// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type NewKeypoolParams = {
  bitcoind: Bitcoind
}

/**
 * newkeypool
 *
 * Entirely clears and refills the keypool.
 * WARNING: On non-HD wallets, this will require a new backup immediately, to include the new keys.
 * When restoring a backup of an HD wallet created before the newkeypool command is run, funds received to
 * new addresses may not appear automatically. They have not been lost, but the wallet may not find them.
 * This can be fixed by running the newkeypool command on the backup and then rescanning, so the wallet
 * re-generates the required keys.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function newKeypool(params: NewKeypoolParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'newkeypool', params: methodParams }, bitcoind)
}
