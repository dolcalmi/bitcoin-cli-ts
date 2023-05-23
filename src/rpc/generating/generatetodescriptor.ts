// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GeneratetodescriptorParams = {
  bitcoind: Bitcoind
  /* How many blocks are generated immediately. */
  num_blocks: number
  /* The descriptor to send the newly generated bitcoin to. */
  descriptor: string
  /* How many iterations to try. */
  maxtries?: number
}

/**
 * generatetodescriptor num_blocks "descriptor" ( maxtries )
 *
 * Mine blocks immediately to a specified descriptor (before the RPC call returns)
 *
 */
export function generatetodescriptor(params: GeneratetodescriptorParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'generatetodescriptor', params: methodParams },
    bitcoind
  )
}
