// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type LoadWalletParams = {
  bitcoind: Bitcoind
  /* The wallet directory or .dat file. */
  filename: string
  /* Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged. */
  load_on_startup?: boolean
}

/**
 * loadwallet "filename" ( load_on_startup )
 *
 * Loads a wallet from a wallet file or directory.
 * Note that all wallet command-line options used when starting bitcoind will be
 * applied to the new wallet.
 *
 */
export function loadWallet(params: LoadWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'loadwallet', params: methodParams }, bitcoind)
}
