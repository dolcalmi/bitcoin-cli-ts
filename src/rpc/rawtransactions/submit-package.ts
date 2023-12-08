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
 * Submit a package of raw transactions (serialized, hex-encoded) to local node.
 * The package must consist of a child with its parents, and none of the parents may depend on one another.
 * The package will be validated according to consensus and mempool policy rules. If all transactions pass, they will be accepted to mempool.
 * This RPC is experimental and the interface may be unstable. Refer to doc/policy/packages.md for documentation on package policies.
 * Warning: successful submission does not mean the transactions will propagate throughout the network.
 *
 */
export function submitPackage(params: SubmitPackageParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'submitpackage', params: methodParams }, bitcoind)
}
