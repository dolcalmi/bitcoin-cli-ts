// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type RemovePrunedFundsParams = {
  bitcoind: Bitcoind
  /* The hex-encoded id of the transaction you are deleting */
  txid: string
}

/**
 * removeprunedfunds "txid"
 *
 * Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will affect wallet balances.
 *
 */
export function removePrunedFunds(params: RemovePrunedFundsParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'removeprunedfunds', params: methodParams },
    bitcoind
  )
}
