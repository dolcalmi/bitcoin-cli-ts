// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SetWalletFlagParams = {
  bitcoind: Bitcoind
  /* The name of the flag to change. Current available flags: avoid_reuse */
  flag: string
  /* The new state. */
  value?: boolean
}

/**
 * setwalletflag "flag" ( value )
 *
 * Change the state of the given wallet flag for a wallet.
 *
 */
export function setWalletFlag(params: SetWalletFlagParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'setwalletflag', params: methodParams }, bitcoind)
}
