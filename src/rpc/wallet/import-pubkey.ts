// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportPubkeyParams = {
  bitcoind: Bitcoind
  /* The hex-encoded public key */
  pubkey: string
  /* An optional label */
  label?: string
  /* Rescan the wallet for transactions */
  rescan?: boolean
}

/**
 * importpubkey "pubkey" ( "label" rescan )
 *
 * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup.
 * Hint: use importmulti to import more than one public key.
 * Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls
 * may report that the imported pubkey exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.
 * Note: Use "getwalletinfo" to query the scanning progress.
 *
 */
export function importPubkey(params: ImportPubkeyParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'importpubkey', params: methodParams }, bitcoind)
}
