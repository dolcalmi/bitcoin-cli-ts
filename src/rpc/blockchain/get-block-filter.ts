// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockFilterParams = {
  bitcoind: Bitcoind
  /* The hash of the block */
  blockhash: string
  /* The type name of the filter */
  filtertype?: string
}

/**
 * getblockfilter "blockhash" ( "filtertype" )
 *
 * Retrieve a BIP 157 content filter for a particular block.
 *
 */
export function getBlockFilter(params: GetBlockFilterParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblockfilter', params: methodParams }, bitcoind)
}
