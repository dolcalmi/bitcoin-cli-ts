// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WaitForBlockHeightParams = {
  bitcoind: Bitcoind
  /* Block height to wait for. */
  height: number
  /* Time in milliseconds to wait for a response. 0 indicates no timeout. */
  timeout?: number
}

/**
 * waitforblockheight height ( timeout )
 *
 * Waits for (at least) block height and returns the height and hash
 * of the current tip.
 * Returns the current block on timeout or exit.
 *
 */
export function waitForBlockHeight(params: WaitForBlockHeightParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'waitforblockheight', params: methodParams },
    bitcoind
  )
}
