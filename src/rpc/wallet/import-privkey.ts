// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportPrivkeyParams = {
  bitcoind: Bitcoind
  /* The private key (see dumpprivkey) */
  privkey: string
  /* An optional label */
  label?: string
  /* Rescan the wallet for transactions */
  rescan?: boolean
}

/**
 * importprivkey "privkey" ( "label" rescan )
 *
 * Adds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup.
 * Hint: use importmulti to import more than one private key.
 * Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls
 * may report that the imported key exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.
 * Note: Use "getwalletinfo" to query the scanning progress.
 *
 */
export function importPrivkey(params: ImportPrivkeyParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'importprivkey', params: methodParams }, bitcoind)
}
