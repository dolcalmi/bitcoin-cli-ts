// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WalletDisplayAddressParams = {
  bitcoind: Bitcoind
  /*  */
  address: string
}

/**
 * walletdisplayaddress bitcoin address to display
 *
 * Display address on an external signer for verification.
 *
 */
export function walletDisplayAddress(params: WalletDisplayAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'walletdisplayaddress', params: methodParams },
    bitcoind
  )
}
