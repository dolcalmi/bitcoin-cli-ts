// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type CreateRawTransactionParams = {
  bitcoind: Bitcoind
  /* [
       {                       (json object)
         "txid": "hex",        (string, required) The transaction id
         "vout": n,            (numeric, required) The output number
         "sequence": n,        (numeric, optional, default=depends on the value of the 'replaceable' and 'locktime' arguments) The sequence number
       },
       ...
     ] */
  inputs: Array<unknown>
  /* [
       {                       (json object)
         "address": amount,    (numeric or string, required) A key-value pair. The key (string) is the bitcoin address, the value (float or string) is the amount in BTC
         ...
       },
       {                       (json object)
         "data": "hex",        (string, required) A key-value pair. The key must be "data", the value is hex-encoded data
       },
       ...
     ] */
  outputs: Array<unknown>
  /* Raw locktime. Non-0 value also locktime-activates inputs */
  locktime?: number
  /* Marks this transaction as BIP125-replaceable.
       Allows this transaction to be replaced by a transaction with higher fees. If provided, it is an error if explicit sequence numbers are incompatible. */
  replaceable?: boolean
}

/**
 * createrawtransaction [{"txid":"hex","vout":n,"sequence":n},...] [{"address":amount,...},{"data":"hex"},...] ( locktime replaceable )
 *
 * Create a transaction spending the given inputs and creating new outputs.
 * Outputs can be addresses or data.
 * Returns hex-encoded raw transaction.
 * Note that the transaction's inputs are not signed, and
 * it is not stored in the wallet or transmitted to the network.
 *
 */
export function createRawTransaction(params: CreateRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'createrawtransaction', params: methodParams },
    bitcoind
  )
}
