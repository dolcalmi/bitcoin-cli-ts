// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type VerifyChainParams = {
  bitcoind: Bitcoind
  /* How thorough the block verification is:
       - level 0 reads the blocks from disk
       - level 1 verifies block validity
       - level 2 verifies undo data
       - level 3 checks disconnection of tip blocks
       - level 4 tries to reconnect the blocks
       - each level includes the checks of the previous levels */
  checklevel?: number
  /* The number of blocks to check. */
  nblocks?: number
}

/**
 * verifychain ( checklevel nblocks )
 *
 * Verifies blockchain database.
 *
 */
export function verifyChain(params: VerifyChainParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'verifychain', params: methodParams }, bitcoind)
}
