// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type LockUnspentParams = {
  bitcoind: Bitcoind
  /* Whether to unlock (true) or lock (false) the specified transactions */
  unlock: boolean
  /* [
       {                   (json object)
         "txid": "hex",    (string, required) The transaction id
         "vout": n,        (numeric, required) The output number
       },
       ...
     ] */
  transactions?: Array<unknown>
}

/**
 * lockunspent unlock ( [{"txid":"hex","vout":n},...] )
 *
 * Updates list of temporarily unspendable outputs.
 * Temporarily lock (unlock=false) or unlock (unlock=true) specified transaction outputs.
 * If no transaction outputs are specified when unlocking then all current locked transaction outputs are unlocked.
 * A locked transaction output will not be chosen by automatic coin selection, when spending bitcoins.
 * Manually selected coins are automatically unlocked.
 * Locks are stored in memory only. Nodes start with zero locked outputs, and the locked output list
 * is always cleared (by virtue of process exit) when a node stops or fails.
 * Also see the listunspent call
 *
 */
export function lockUnspent(params: LockUnspentParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'lockunspent', params: methodParams }, bitcoind)
}
