// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WaitForBlockParams = {
  bitcoind: Bitcoind
  /* Block hash to wait for. */
  blockhash: string
  /* Time in milliseconds to wait for a response. 0 indicates no timeout. */
  timeout?: number
}

/**
 * waitforblock "blockhash" ( timeout )
 *
 * Waits for a specific new block and returns useful info about it.
 * Returns the current block on timeout or exit.
 * Make sure to use no RPC timeout (bitcoin-cli -rpcclienttimeout=0)
 *
 */
export function waitForBlock(params: WaitForBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'waitforblock', params: methodParams }, bitcoind)
}
