// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type CombinePsbtParams = {
  bitcoind: Bitcoind
  /* [
       "psbt",    (string) A base64 string of a PSBT
       ...
     ] */
  txs: Array<unknown>
}

/**
 * combinepsbt ["psbt",...]
 *
 * Combine multiple partially signed Bitcoin transactions into one transaction.
 * Implements the Combiner role.
 *
 */
export function combinePsbt(params: CombinePsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'combinepsbt', params: methodParams }, bitcoind)
}
