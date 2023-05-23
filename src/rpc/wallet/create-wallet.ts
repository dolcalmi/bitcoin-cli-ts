// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type CreateWalletParams = {
  bitcoind: Bitcoind
  /* The name for the new wallet. If this is a path, the wallet will be created at the path location. */
  wallet_name: string
  /* Disable the possibility of private keys (only watchonlys are possible in this mode). */
  disable_private_keys?: boolean
  /* Create a blank wallet. A blank wallet has no keys or HD seed. One can be set using sethdseed. */
  blank?: boolean
  /* Encrypt the wallet with this passphrase. */
  passphrase?: string
  /* Keep track of coin reuse, and treat dirty and clean coins differently with privacy considerations in mind. */
  avoid_reuse?: boolean
  /* Create a native descriptor wallet. The wallet will use descriptors internally to handle address creation */
  descriptors?: boolean
  /* Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged. */
  load_on_startup?: boolean
  /* Use an external signer such as a hardware wallet. Requires -signer to be configured. Wallet creation will fail if keys cannot be fetched. Requires disable_private_keys and descriptors set to true. */
  external_signer?: boolean
}

/**
 * createwallet "wallet_name" ( disable_private_keys blank "passphrase" avoid_reuse descriptors load_on_startup external_signer )
 *
 * Creates and loads a new wallet.
 *
 */
export function createWallet(params: CreateWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'createwallet', params: methodParams }, bitcoind)
}
