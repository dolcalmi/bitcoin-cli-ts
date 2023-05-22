// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetReceivedByLabelParams = {
  bitcoind: Bitcoind
  /* The selected label, may be the default label using "". */
  label: string
  /* Only include transactions confirmed at least this many times. */
  minconf?: number
}

/**
 * getreceivedbylabel "label" ( minconf )
 *
 * Returns the total amount received by addresses with <label> in transactions with at least [minconf] confirmations.
 *
 */
export function getReceivedByLabel(params: GetReceivedByLabelParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getreceivedbylabel', params: methodParams },
    bitcoind
  )
}
