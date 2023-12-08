// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportAddressParams = {
  bitcoind: Bitcoind
  /* The Bitcoin address (or hex-encoded script) */
  address: string
  /* An optional label */
  label?: string
  /* Scan the chain and mempool for wallet transactions. */
  rescan?: boolean
  /* Add the P2SH version of the script as well */
  p2sh?: boolean
}

/**
 * importaddress "address" ( "label" rescan p2sh )
 *
 * Adds an address or script (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup.
 * Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls
 * may report that the imported address exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.
 * The rescan parameter can be set to false if the key was never used to create transactions. If it is set to false,
 * but the key was used to create transactions, rescanblockchain needs to be called with the appropriate block range.
 * If you have the full public key, you should call importpubkey instead of this.
 * Hint: use importmulti to import more than one address.
 * Note: If you import a non-standard raw script in hex form, outputs sending to it will be treated
 * as change, and not show up in many RPCs.
 * Note: Use "getwalletinfo" to query the scanning progress.
 * Note: This command is only compatible with legacy wallets. Use "importdescriptors" for descriptor wallets.
 *
 */
export function importAddress(params: ImportAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'importaddress', params: methodParams }, bitcoind)
}
