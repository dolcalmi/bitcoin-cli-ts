// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type UpgradeWalletParams = {
  bitcoind: Bitcoind
  /* The version number to upgrade to. Default is the latest wallet version. */
  version?: number
}

/**
 * upgradewallet ( version )
 *
 * Upgrade the wallet. Upgrades to the latest version if no version number is specified.
 * New keys may be generated and a new wallet backup will need to be made.
 *
 */
export function upgradeWallet(params: UpgradeWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'upgradewallet', params: methodParams }, bitcoind)
}
