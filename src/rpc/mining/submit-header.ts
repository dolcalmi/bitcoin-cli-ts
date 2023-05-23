// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SubmitHeaderParams = {
  bitcoind: Bitcoind
  /* the hex-encoded block header data */
  hexdata: string
}

/**
 * submitheader "hexdata"
 *
 * Decode the given hexdata as a header and submit it as a candidate chain tip if valid.
 * Throws when the header is invalid.
 *
 */
export function submitHeader(params: SubmitHeaderParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'submitheader', params: methodParams }, bitcoind)
}
