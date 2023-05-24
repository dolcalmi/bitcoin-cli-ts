// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DumpTxOutsetParams = {
  bitcoind: Bitcoind
  /* Path to the output file. If relative, will be prefixed by datadir. */
  path: string
}

/**
 * dumptxoutset "path"
 *
 * Write the serialized UTXO set to disk.
 *
 */
export function dumpTxOutset(params: DumpTxOutsetParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'dumptxoutset', params: methodParams }, bitcoind)
}
