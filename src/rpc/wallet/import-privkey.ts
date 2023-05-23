// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportPrivkeyParams = {
  bitcoind: Bitcoind
  /* The private key (see dumpprivkey) */
  privkey: string
  /* An optional label */
  label?: string
  /* Scan the chain and mempool for wallet transactions. */
  rescan?: boolean
}

/**
 * importprivkey "privkey" ( "label" rescan )
 *
 * Adds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup.
 * Hint: use importmulti to import more than one private key.
 * Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls
 * may report that the imported key exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.
 * The rescan parameter can be set to false if the key was never used to create transactions. If it is set to false,
 * but the key was used to create transactions, rescanblockchain needs to be called with the appropriate block range.
 * Note: Use "getwalletinfo" to query the scanning progress.
 *
 */
export function importPrivkey(params: ImportPrivkeyParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'importprivkey', params: methodParams }, bitcoind)
}
