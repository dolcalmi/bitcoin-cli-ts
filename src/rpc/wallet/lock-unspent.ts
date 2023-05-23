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
  /* Whether to write/erase this lock in the wallet database, or keep the change in memory only. Ignored for unlocking. */
  persistent?: boolean
}

/**
 * lockunspent unlock ( [{"txid":"hex","vout":n},...] persistent )
 *
 * Updates list of temporarily unspendable outputs.
 * Temporarily lock (unlock=false) or unlock (unlock=true) specified transaction outputs.
 * If no transaction outputs are specified when unlocking then all current locked transaction outputs are unlocked.
 * A locked transaction output will not be chosen by automatic coin selection, when spending bitcoins.
 * Manually selected coins are automatically unlocked.
 * Locks are stored in memory only, unless persistent=true, in which case they will be written to the
 * wallet database and loaded on node start. Unwritten (persistent=false) locks are always cleared
 * (by virtue of process exit) when a node stops or fails. Unlocking will clear both persistent and not.
 * Also see the listunspent call
 *
 */
export function lockUnspent(params: LockUnspentParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'lockunspent', params: methodParams }, bitcoind)
}
