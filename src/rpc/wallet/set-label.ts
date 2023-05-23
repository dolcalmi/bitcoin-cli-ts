// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SetLabelParams = {
  bitcoind: Bitcoind
  /* The bitcoin address to be associated with a label. */
  address: string
  /* The label to assign to the address. */
  label: string
}

/**
 * setlabel "address" "label"
 *
 * Sets the label associated with the given address.
 *
 */
export function setLabel(params: SetLabelParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'setlabel', params: methodParams }, bitcoind)
}
