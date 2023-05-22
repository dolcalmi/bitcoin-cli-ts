// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetNetworkHashPsParams = {
  bitcoind: Bitcoind
  /* The number of blocks, or -1 for blocks since last difficulty change. */
  nblocks?: number
  /* To estimate at the time of the given height. */
  height?: number
}

/**
 * getnetworkhashps ( nblocks height )
 *
 * Returns the estimated network hashes per second based on the last n blocks.
 * Pass in [blocks] to override # of blocks, -1 specifies since last difficulty change.
 * Pass in [height] to estimate the network speed at the time when a certain block was found.
 *
 */
export function getNetworkHashPs(params: GetNetworkHashPsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getnetworkhashps', params: methodParams }, bitcoind)
}
