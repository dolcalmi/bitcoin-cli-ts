// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type AnalyzePsbtParams = {
  bitcoind: Bitcoind
  /* A base64 string of a PSBT */
  psbt: string
}

/**
 * analyzepsbt "psbt"
 *
 * Analyzes and provides information about the current status of a PSBT and its inputs
 *
 */
export function analyzePsbt(params: AnalyzePsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'analyzepsbt', params: methodParams }, bitcoind)
}
