// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListAddressGroupingsParams = {
  bitcoind: Bitcoind
}

/**
 * listaddressgroupings
 *
 * Lists groups of addresses which have had their common ownership
 * made public by common use as inputs or as the resulting change
 * in past transactions
 *
 */
export function listAddressGroupings(params: ListAddressGroupingsParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'listaddressgroupings', params: methodParams },
    bitcoind
  )
}
