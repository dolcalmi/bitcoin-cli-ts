// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DumpPrivkeyParams = {
  bitcoind: Bitcoind
  /* The bitcoin address for the private key */
  address: string
}

/**
 * dumpprivkey "address"
 *
 * Reveals the private key corresponding to 'address'.
 * Then the importprivkey can be used with this output
 * Note: This command is only compatible with legacy wallets.
 *
 */
export function dumpPrivkey(params: DumpPrivkeyParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'dumpprivkey', params: methodParams }, bitcoind)
}
