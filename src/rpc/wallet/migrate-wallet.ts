// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type MigrateWalletParams = {
  bitcoind: Bitcoind
}

/**
 * migratewallet
 *
 * EXPERIMENTAL warning: This call may not work as expected and may be changed in future releases
 * Migrate the wallet to a descriptor wallet.
 * A new wallet backup will need to be made.
 * The migration process will create a backup of the wallet before migrating. This backup
 * file will be named <wallet name>-<timestamp>.legacy.bak and can be found in the directory
 * for this wallet. In the event of an incorrect migration, the backup can be restored using restorewallet.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function migrateWallet(params: MigrateWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'migratewallet', params: methodParams }, bitcoind)
}
