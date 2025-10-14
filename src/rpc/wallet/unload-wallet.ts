// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type UnloadWalletParams = {
  bitcoind: Bitcoind
  /* The name of the wallet to unload. If provided both here and in the RPC endpoint, the two must be identical. */
  wallet_name?: string
  /* Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged. */
  load_on_startup?: boolean
}

/**
 * unloadwallet ( "wallet_name" load_on_startup )
 *
 * Unloads the wallet referenced by the request endpoint or the wallet_name argument.
 * If both are specified, they must be identical.
 *
 */
export function unloadWallet(params: UnloadWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'unloadwallet', params: methodParams }, bitcoind)
}
