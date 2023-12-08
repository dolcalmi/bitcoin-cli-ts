// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportPubkeyParams = {
  bitcoind: Bitcoind
  /* The hex-encoded public key */
  pubkey: string
  /* An optional label */
  label?: string
  /* Scan the chain and mempool for wallet transactions. */
  rescan?: boolean
}

/**
 * importpubkey "pubkey" ( "label" rescan )
 *
 * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup.
 * Hint: use importmulti to import more than one public key.
 * Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls
 * may report that the imported pubkey exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.
 * The rescan parameter can be set to false if the key was never used to create transactions. If it is set to false,
 * but the key was used to create transactions, rescanblockchain needs to be called with the appropriate block range.
 * Note: Use "getwalletinfo" to query the scanning progress.
 * Note: This command is only compatible with legacy wallets. Use "importdescriptors" with "combo(X)" for descriptor wallets.
 *
 */
export function importPubkey(params: ImportPubkeyParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'importpubkey', params: methodParams }, bitcoind)
}
