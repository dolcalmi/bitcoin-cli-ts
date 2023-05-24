// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SubmitPackageParams = {
  bitcoind: Bitcoind
  /* [
       "rawtx",    (string)
       ...
     ] */
  package: Array<unknown>
}

/**
 * submitpackage ["rawtx",...]
 *
 * Submit a package of raw transactions (serialized, hex-encoded) to local node (-regtest only).
 * The package will be validated according to consensus and mempool policy rules. If all transactions pass, they will be accepted to mempool.
 * This RPC is experimental and the interface may be unstable. Refer to doc/policy/packages.md for documentation on package policies.
 * Warning: until package relay is in use, successful submission does not mean the transaction will propagate to other nodes on the network.
 * Currently, each transaction is broadcasted individually after submission, which means they must meet other nodes' feerate requirements alone.
 *
 */
export function submitPackage(params: SubmitPackageParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'submitpackage', params: methodParams }, bitcoind)
}
