// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GeneratetoaddressParams = {
  bitcoind: Bitcoind
  /* How many blocks are generated immediately. */
  nblocks: number
  /* The address to send the newly generated bitcoin to. */
  address: string
  /* How many iterations to try. */
  maxtries?: number
}

/**
 * generatetoaddress nblocks "address" ( maxtries )
 *
 * Mine blocks immediately to a specified address (before the RPC call returns)
 *
 */
export function generatetoaddress(params: GeneratetoaddressParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'generatetoaddress', params: methodParams },
    bitcoind
  )
}
