// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockHeaderParams = {
  bitcoind: Bitcoind
  /* The block hash */
  blockhash: string
  /* true for a json object, false for the hex-encoded data */
  verbose?: boolean
}

/**
 * getblockheader "blockhash" ( verbose )
 *
 * If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'.
 * If verbose is true, returns an Object with information about blockheader 'hash'.
 *
 */
export function getBlockHeader(params: GetBlockHeaderParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblockheader', params: methodParams }, bitcoind)
}
