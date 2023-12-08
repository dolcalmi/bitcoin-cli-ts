// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type WalletCreateFundedPsbtParams = {
  bitcoind: Bitcoind
  /* [
       {                       (json object)
         "txid": "hex",        (string, required) The transaction id
         "vout": n,            (numeric, required) The output number
         "sequence": n,        (numeric, optional, default=depends on the value of the 'locktime' and 'options.replaceable' arguments) The sequence number
         "weight": n,          (numeric, optional, default=Calculated from wallet and solving data) The maximum weight for this input, including the weight of the outpoint and sequence number. Note that signature sizes are not guaranteed to be consistent, so the maximum DER signatures size of 73 bytes should be used when considering ECDSA signatures.Remember to convert serialized sizes to weight units when necessary.
       },
       ...
     ] */
  inputs?: Array<unknown>
  /* [
       {                       (json object)
         "address": amount,    (numeric or string, required) A key-value pair. The key (string) is the bitcoin address,
                               the value (float or string) is the amount in BTC
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
  /* Options object that can be used to pass named arguments, listed below. */
  options?: Json
  /* {
       "pubkeys": [        (json array, optional, default=[]) Public keys involved in this transaction.
         "pubkey",         (string) A public key
         ...
       ], */
  bip32derivs?: boolean
}

/**
 * walletcreatefundedpsbt ( [{"txid":"hex","vout":n,"sequence":n,"weight":n},...] ) [{"address":amount,...},{"data":"hex"},...] ( locktime options bip32derivs )
 *
 * Creates and funds a transaction in the Partially Signed Transaction format.
 * Implements the Creator and Updater roles.
 * All existing inputs must either have their previous output transaction be in the wallet
 * or be in the UTXO set. Solving data must be provided for non-wallet inputs.
 *
 */
export function walletCreateFundedPsbt(params: WalletCreateFundedPsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'walletcreatefundedpsbt', params: methodParams },
    bitcoind
  )
}
