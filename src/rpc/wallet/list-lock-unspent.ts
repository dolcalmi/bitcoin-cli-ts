// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListLockUnspentParams = {
  bitcoind: Bitcoind
}

/**
 * listlockunspent
 *
 * Returns list of temporarily unspendable outputs.
 * See the lockunspent call to lock and unlock transactions for spending.
 *
 */
export function listLockUnspent(params: ListLockUnspentParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listlockunspent', params: methodParams }, bitcoind)
}
