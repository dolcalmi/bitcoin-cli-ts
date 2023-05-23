// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetIndexInfoParams = {
  bitcoind: Bitcoind
  /* Filter results for an index with a specific name. */
  index_name?: string
}

/**
 * getindexinfo ( "index_name" )
 *
 * Returns the status of one or all available indices currently running in the node.
 *
 */
export function getIndexInfo(params: GetIndexInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getindexinfo', params: methodParams }, bitcoind)
}
