// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type GethdkeysParams = {
  bitcoind: Bitcoind
  /* Options object that can be used to pass named arguments, listed below. */
  options?: Json
}

/**
 * gethdkeys ( {"active_only":bool,"private":bool,...} )
 *
 * List all BIP 32 HD keys in the wallet and which descriptors use them.
 *
 */
export function gethdkeys(params: GethdkeysParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'gethdkeys', params: methodParams }, bitcoind)
}
