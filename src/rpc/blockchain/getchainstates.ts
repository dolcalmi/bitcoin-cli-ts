// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetchainstatesParams = {
  bitcoind: Bitcoind
}

/**
 * getchainstates
 *
 * Return information about chainstates.
 *
 */
export function getchainstates(params: GetchainstatesParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getchainstates', params: methodParams }, bitcoind)
}
