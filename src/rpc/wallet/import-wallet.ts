// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportWalletParams = {
  bitcoind: Bitcoind
  /* The wallet file */
  filename: string
}

/**
 * importwallet "filename"
 *
 * Imports keys from a wallet dump file (see dumpwallet). Requires a new wallet backup to include imported keys.
 * Note: Use "getwalletinfo" to query the scanning progress.
 *
 */
export function importWallet(params: ImportWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'importwallet', params: methodParams }, bitcoind)
}
