// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportPrunedFundsParams = {
  bitcoind: Bitcoind
  /* A raw transaction in hex funding an already-existing address in wallet */
  rawtransaction: string
  /* The hex output from gettxoutproof that contains the transaction */
  txoutproof: string
}

/**
 * importprunedfunds "rawtransaction" "txoutproof"
 *
 * Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.
 *
 */
export function importPrunedFunds(params: ImportPrunedFundsParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'importprunedfunds', params: methodParams },
    bitcoind
  )
}
