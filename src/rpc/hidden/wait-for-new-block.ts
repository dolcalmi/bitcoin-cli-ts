// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WaitForNewBlockParams = {
  bitcoind: Bitcoind
  /* Time in milliseconds to wait for a response. 0 indicates no timeout. */
  timeout?: number
}

/**
 * waitfornewblock ( timeout )
 *
 * Waits for a specific new block and returns useful info about it.
 * Returns the current block on timeout or exit.
 *
 */
export function waitForNewBlock(params: WaitForNewBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'waitfornewblock', params: methodParams }, bitcoind)
}
