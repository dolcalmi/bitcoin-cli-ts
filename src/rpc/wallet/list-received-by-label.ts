// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ListReceivedByLabelParams = {
  bitcoind: Bitcoind
  /* The minimum number of confirmations before payments are included. */
  minconf?: number
  /* Whether to include labels that haven't received any payments. */
  include_empty?: boolean
  /* Whether to include watch-only addresses (see 'importaddress') */
  include_watchonly?: boolean
  /* Include immature coinbase transactions. */
  include_immature_coinbase?: boolean
}

/**
 * listreceivedbylabel ( minconf include_empty include_watchonly include_immature_coinbase )
 *
 * List received transactions by label.
 *
 */
export function listReceivedByLabel(params: ListReceivedByLabelParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'listreceivedbylabel', params: methodParams },
    bitcoind
  )
}
