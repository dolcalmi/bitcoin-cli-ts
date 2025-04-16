// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetorphantxsParams = {
  bitcoind: Bitcoind
  /* 0 for an array of txids (may contain duplicates), 1 for an array of objects with tx details, and 2 for details from (1) and tx hex */
  verbosity?: number
}

/**
 * getorphantxs ( verbosity )
 *
 * Shows transactions in the tx orphanage.
 * EXPERIMENTAL warning: this call may be changed in future releases.
 *
 */
export function getorphantxs(params: GetorphantxsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getorphantxs', params: methodParams }, bitcoind)
}
