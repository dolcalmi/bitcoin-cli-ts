// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListWalletsParams = {
  bitcoind: Bitcoind
}

/**
 * listwallets
 *
 * Returns a list of currently loaded wallets.
 * For full information on the wallet, use "getwalletinfo"
 *
 */
export function listWallets(params: ListWalletsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listwallets', params: methodParams }, bitcoind)
}
