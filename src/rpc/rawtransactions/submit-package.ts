// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SubmitPackageParams = {
  bitcoind: Bitcoind
  /* [
       "rawtx",     (string)
       ...
     ] */
  package: Array<unknown>
  /* Reject transactions whose fee rate is higher than the specified value, expressed in BTC/kvB.
       Fee rates larger than 1BTC/kvB are rejected.
       Set to 0 to accept any fee rate. */
  maxfeerate?: number | string
  /* Reject transactions with provably unspendable outputs (e.g. 'datacarrier' outputs that use the OP_RETURN opcode) greater than the specified value, expressed in BTC.
       If burning funds through unspendable outputs is desired, increase this value.
       This check is based on heuristics and does not guarantee spendability of outputs. */
  maxburnamount?: number | string
}

/**
 * submitpackage ["rawtx",...] ( maxfeerate maxburnamount )
 *
 * Submit a package of raw transactions (serialized, hex-encoded) to local node.
 * The package will be validated according to consensus and mempool policy rules. If any transaction passes, it will be accepted to mempool.
 * This RPC is experimental and the interface may be unstable. Refer to doc/policy/packages.md for documentation on package policies.
 * Warning: successful submission does not mean the transactions will propagate throughout the network.
 *
 */
export function submitPackage(params: SubmitPackageParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'submitpackage', params: methodParams }, bitcoind)
}
