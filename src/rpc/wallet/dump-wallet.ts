// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DumpWalletParams = {
  bitcoind: Bitcoind
  /* The filename with path (absolute path recommended) */
  filename: string
}

/**
 * dumpwallet "filename"
 *
 * Dumps all wallet keys in a human-readable format to a server-side file. This does not allow overwriting existing files.
 * Imported scripts are included in the dumpfile, but corresponding BIP173 addresses, etc. may not be added automatically by importwallet.
 * Note that if your wallet contains keys which are not derived from your HD seed (e.g. imported keys), these are not covered by
 * only backing up the seed itself, and must be backed up too (e.g. ensure you back up the whole dumpfile).
 *
 */
export function dumpWallet(params: DumpWalletParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'dumpwallet', params: methodParams }, bitcoind)
}
