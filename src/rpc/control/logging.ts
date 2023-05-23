// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type LoggingParams = {
  bitcoind: Bitcoind
  /* [
       "include_category",    (string) the valid logging category
       ...
     ] */
  include?: Array<unknown>
  /* [
       "exclude_category",    (string) the valid logging category
       ...
     ] */
  exclude?: Array<unknown>
}

/**
 * logging ( ["include_category",...] ["exclude_category",...] )
 *
 * Gets and sets the logging configuration.
 * When called without an argument, returns the list of categories with status that are currently being debug logged or not.
 * When called with arguments, adds or removes categories from debug logging and return the lists above.
 * The arguments are evaluated in order "include", "exclude".
 * If an item is both included and excluded, it will thus end up being excluded.
 * The valid logging categories are: addrman, bench, blockstorage, cmpctblock, coindb, estimatefee, http, i2p, ipc, leveldb, libevent, mempool, mempoolrej, net, proxy, prune, qt, rand, reindex, rpc, selectcoins, tor, util, validation, walletdb, zmq
 * In addition, the following are available as category names with special meanings:
 *   - "all",  "1" : represent all logging categories.
 *   - "none", "0" : even if other logging categories are specified, ignore all of them.
 *
 */
export function logging(params: LoggingParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'logging', params: methodParams }, bitcoind)
}
