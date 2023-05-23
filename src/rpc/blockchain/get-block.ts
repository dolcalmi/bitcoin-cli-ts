// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockParams = {
  bitcoind: Bitcoind
  /* The block hash */
  blockhash: string
  /* 0 for hex-encoded data, 1 for a JSON object, 2 for JSON object with transaction data, and 3 for JSON object with transaction data including prevout information for inputs */
  verbosity?: number
}

/**
 * getblock "blockhash" ( verbosity )
 *
 * If verbosity is 0, returns a string that is serialized, hex-encoded data for block 'hash'.
 * If verbosity is 1, returns an Object with information about block 'hash'.
 * If verbosity is 2, returns an Object with information about block <hash> and information about each transaction.
 * If verbosity is 3, returns an Object with information about block <hash> and information about each transaction, including prevout information for inputs (only for unpruned blocks in the current best chain).
 *
 */
export function getBlock(params: GetBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblock', params: methodParams }, bitcoind)
}
