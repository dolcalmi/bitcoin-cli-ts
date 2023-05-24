// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GenerateToDescriptorParams = {
  bitcoind: Bitcoind
  /* How many blocks are generated. */
  num_blocks: number
  /* The descriptor to send the newly generated bitcoin to. */
  descriptor: string
  /* How many iterations to try. */
  maxtries?: number
}

/**
 * generatetodescriptor num_blocks "descriptor" ( maxtries )
 *
 * Mine to a specified descriptor and return the block hashes.
 *
 */
export function generateToDescriptor(params: GenerateToDescriptorParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'generatetodescriptor', params: methodParams },
    bitcoind
  )
}
