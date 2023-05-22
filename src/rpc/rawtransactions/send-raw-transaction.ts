// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SendRawTransactionParams = {
  bitcoind: Bitcoind
  /* The hex string of the raw transaction */
  hexstring: string
  /* Reject transactions whose fee rate is higher than the specified value, expressed in BTC/kvB.
       Set to 0 to accept any fee rate. */
  maxfeerate?: number | string
}

/**
 * sendrawtransaction "hexstring" ( maxfeerate )
 *
 * Submit a raw transaction (serialized, hex-encoded) to local node and network.
 * The transaction will be sent unconditionally to all peers, so using sendrawtransaction
 * for manual rebroadcast may degrade privacy by leaking the transaction's origin, as
 * nodes will normally not rebroadcast non-wallet transactions already in their mempool.
 * A specific exception, RPC_TRANSACTION_ALREADY_IN_CHAIN, may throw if the transaction cannot be added to the mempool.
 * Related RPCs: createrawtransaction, signrawtransactionwithkey
 *
 */
export function sendRawTransaction(params: SendRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'sendrawtransaction', params: methodParams },
    bitcoind
  )
}
