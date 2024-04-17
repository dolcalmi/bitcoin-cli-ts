// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type LoadTxOutsetParams = {
  bitcoind: Bitcoind
  /* path to the snapshot file. If relative, will be prefixed by datadir. */
  path: string
}

/**
 * loadtxoutset "path"
 *
 * Load the serialized UTXO set from a file.
 * Once this snapshot is loaded, its contents will be deserialized into a second chainstate data structure, which is then used to sync to the network's tip. Meanwhile, the original chainstate will complete the initial block download process in the background, eventually validating up to the block that the snapshot is based upon.
 * The result is a usable bitcoind instance that is current with the network tip in a matter of minutes rather than hours. UTXO snapshot are typically obtained from third-party sources (HTTP, torrent, etc.) which is reasonable since their contents are always checked by hash.
 * You can find more information on this process in the `assumeutxo` design document (<https://github.com/bitcoin/bitcoin/blob/master/doc/design/assumeutxo.md>).
 *
 */
export function loadTxOutset(params: LoadTxOutsetParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'loadtxoutset', params: methodParams }, bitcoind)
}
