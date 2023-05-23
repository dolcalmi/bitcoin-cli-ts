// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SaveMempoolParams = {
  bitcoind: Bitcoind
}

/**
 * savemempool
 *
 * Dumps the mempool to disk. It will fail until the previous dump is fully loaded.
 *
 */
export function saveMempool(params: SaveMempoolParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'savemempool', params: methodParams }, bitcoind)
}
