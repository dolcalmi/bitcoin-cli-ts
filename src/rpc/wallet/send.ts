// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type SendParams = {
  bitcoind: Bitcoind
  /* [
       {                                 (json object)
         "address": amount,              (numeric or string, required) A key-value pair. The key (string) is the bitcoin address, the value (float or string) is the amount in BTC
         ...
       },
       {                                 (json object)
         "data": "hex",                  (string, required) A key-value pair. The key must be "data", the value is hex-encoded data
       },
       ...
     ] */
  outputs: Array<unknown>
  /* Confirmation target in blocks */
  conf_target?: number
  /* The fee estimate mode, must be one of (case insensitive):
       "unset"
       "economical"
       "conservative" */
  estimate_mode?: string
  /* Specify a fee rate in sat/vB. */
  fee_rate?: number | string
  /* {
       "add_inputs": bool,               (boolean, optional, default=false when "inputs" are specified, true otherwise) Automatically include coins from the wallet to cover the target amount.
                                         
       "include_unsafe": bool,           (boolean, optional, default=false) Include inputs that are not safe to spend (unconfirmed transactions from outside keys and unconfirmed replacement transactions).
                                         Warning: the resulting transaction may become invalid if one of the unsafe inputs disappears.
                                         If that happens, you will need to fund the transaction with different inputs and republish it.
       "add_to_wallet": bool,            (boolean, optional, default=true) When false, returns a serialized transaction which will not be added to the wallet or broadcast
       "change_address": "str",          (string, optional, default=automatic) The bitcoin address to receive the change
       "change_position": n,             (numeric, optional, default=random) The index of the change output
       "change_type": "str",             (string, optional, default=set by -changetype) The output type to use. Only valid if change_address is not specified. Options are "legacy", "p2sh-segwit", "bech32" and "bech32m".
       "fee_rate": amount,               (numeric or string, optional, default=not set, fall back to wallet fee estimation) Specify a fee rate in sat/vB.
       "include_watching": bool,         (boolean, optional, default=true for watch-only wallets, otherwise false) Also select inputs which are watch only.
                                         Only solvable inputs can be used. Watch-only destinations are solvable if the public key and/or output script was imported,
                                         e.g. with 'importpubkey' or 'importmulti' with the 'pubkeys' or 'desc' field.
       "inputs": [                       (json array, optional, default=[]) Specify inputs instead of adding them automatically. A JSON array of JSON objects
         "txid",                         (string, required) The transaction id
         vout,                           (numeric, required) The output number
         sequence,                       (numeric, required) The sequence number
         weight,                         (numeric, optional, default=Calculated from wallet and solving data) The maximum weight for this input, including the weight of the outpoint and sequence number. Note that signature sizes are not guaranteed to be consistent, so the maximum DER signatures size of 73 bytes should be used when considering ECDSA signatures.Remember to convert serialized sizes to weight units when necessary.
         ...
       ], */
  options?: Json
}

/**
 * send [{"address":amount,...},{"data":"hex"},...] ( conf_target "estimate_mode" fee_rate options )
 *
 * EXPERIMENTAL warning: this call may be changed in future releases.
 * Send a transaction.
 *
 */
export function send(params: SendParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'send', params: methodParams }, bitcoind)
}
