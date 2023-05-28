// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type RestoreWalletParams = {
  bitcoind: Bitcoind
  /* The name that will be applied to the restored wallet */
  wallet_name: string
  /* The backup file that will be used to restore the wallet. */
  backup_file: string
  /* Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged. */
  load_on_startup?: boolean
}

/**
 * restorewallet "wallet_name" "backup_file" ( load_on_startup )
 *
 * Restore and loads a wallet from backup.
 * The rescan is significantly faster if a descriptor wallet is restored
 * and block filters are available (using startup option "-blockfilterindex=1").
 *
 */
export function restoreWallet(params: RestoreWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'restorewallet', params: methodParams }, bitcoind)
}
