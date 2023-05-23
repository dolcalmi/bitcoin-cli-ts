// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type TestMempoolAcceptParams = {
  bitcoind: Bitcoind
  /* [
       "rawtx",    (string)
       ...
     ] */
  rawtxs: Array<unknown>
  /* Reject transactions whose fee rate is higher than the specified value, expressed in BTC/kvB */
  maxfeerate?: number | string
}

/**
 * testmempoolaccept ["rawtx",...] ( maxfeerate )
 *
 * Returns result of mempool acceptance tests indicating if raw transaction(s) (serialized, hex-encoded) would be accepted by mempool.
 * If multiple transactions are passed in, parents must come before children and package policies apply: the transactions cannot conflict with any mempool transactions or each other.
 * If one transaction fails, other transactions may not be fully validated (the 'allowed' key will be blank).
 * The maximum number of transactions allowed is 25.
 * This checks if transactions violate the consensus or policy rules.
 * See sendrawtransaction call.
 *
 */
export function testMempoolAccept(params: TestMempoolAcceptParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'testmempoolaccept', params: methodParams },
    bitcoind
  )
}
