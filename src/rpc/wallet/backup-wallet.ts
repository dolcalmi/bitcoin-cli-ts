// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type BackupWalletParams = {
  bitcoind: Bitcoind
  /* The destination directory or file */
  destination: string
}

/**
 * backupwallet "destination"
 *
 * Safely copies current wallet file to destination, which can be a directory or a path with filename.
 *
 */
export function backupWallet(params: BackupWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'backupwallet', params: methodParams }, bitcoind)
}
