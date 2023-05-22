// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type JoinPsbtsParams = {
  bitcoind: Bitcoind
  /* [
       "psbt",    (string, required) A base64 string of a PSBT
       ...
     ] */
  txs: Array<unknown>
}

/**
 * joinpsbts ["psbt",...]
 *
 * Joins multiple distinct PSBTs with different inputs and outputs into one PSBT with inputs and outputs from all of the PSBTs
 * No input in any of the PSBTs can be in more than one of the PSBTs.
 *
 */
export function joinPsbts(params: JoinPsbtsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'joinpsbts', params: methodParams }, bitcoind)
}
