// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListDescriptorsParams = {
  bitcoind: Bitcoind
}

/**
 * listdescriptors
 *
 * List descriptors imported into a descriptor-enabled wallet.
 *
 */
export function listDescriptors(params: ListDescriptorsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listdescriptors', params: methodParams }, bitcoind)
}
