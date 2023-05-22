// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockchainInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getblockchaininfo
 *
 * Returns an object containing various state info regarding blockchain processing.
 *
 */
export function getBlockchainInfo(params: GetBlockchainInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getblockchaininfo', params: methodParams },
    bitcoind
  )
}
