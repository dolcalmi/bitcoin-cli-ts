// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListBannedParams = {
  bitcoind: Bitcoind
}

/**
 * listbanned
 *
 * List all manually banned IPs/Subnets.
 *
 */
export function listBanned(params: ListBannedParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listbanned', params: methodParams }, bitcoind)
}
