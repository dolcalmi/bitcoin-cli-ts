// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type RescanBlockchainParams = {
  bitcoind: Bitcoind
  /* block height where the rescan should start */
  start_height?: number
  /* the last block height that should be scanned. If none is provided it will rescan up to the tip at return time of this call. */
  stop_height?: number
}

/**
 * rescanblockchain ( start_height stop_height )
 *
 * Rescan the local blockchain for wallet related transactions.
 * Note: Use "getwalletinfo" to query the scanning progress.
 * The rescan is significantly faster when used on a descriptor wallet
 * and block filters are available (using startup option "-blockfilterindex=1").
 *
 */
export function rescanBlockchain(params: RescanBlockchainParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'rescanblockchain', params: methodParams }, bitcoind)
}
