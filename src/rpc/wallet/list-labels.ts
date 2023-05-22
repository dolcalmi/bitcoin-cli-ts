// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListLabelsParams = {
  bitcoind: Bitcoind
  /* Address purpose to list labels for ('send','receive'). An empty string is the same as not providing this argument. */
  purpose?: string
}

/**
 * listlabels ( "purpose" )
 *
 * Returns the list of all labels, or labels that are assigned to addresses with a specific purpose.
 *
 */
export function listLabels(params: ListLabelsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listlabels', params: methodParams }, bitcoind)
}
