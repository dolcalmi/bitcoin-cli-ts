// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GenerateToAddressParams = {
  bitcoind: Bitcoind
  /* How many blocks are generated. */
  nblocks: number
  /* The address to send the newly generated bitcoin to. */
  address: string
  /* How many iterations to try. */
  maxtries?: number
}

/**
 * generatetoaddress nblocks "address" ( maxtries )
 *
 * Mine to a specified address and return the block hashes.
 *
 */
export function generateToAddress(params: GenerateToAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'generatetoaddress', params: methodParams },
    bitcoind
  )
}
