// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SubmitBlockParams = {
  bitcoind: Bitcoind
  /* the hex-encoded block data to submit */
  hexdata: string
  /* dummy value, for compatibility with BIP22. This value is ignored. */
  dummy?: string
}

/**
 * submitblock "hexdata" ( "dummy" )
 *
 * Attempts to submit new block to network.
 * See https://en.bitcoin.it/wiki/BIP_0022 for full specification.
 *
 */
export function submitBlock(params: SubmitBlockParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'submitblock', params: methodParams }, bitcoind)
}
