// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type SendAllParams = {
  bitcoind: Bitcoind
  /* [
       "address",                   (string, required) A bitcoin address which receives an equal share of the unspecified amount.
       {                            (json object)
         "address": amount,         (numeric or string, required) A key-value pair. The key (string) is the bitcoin address, the value (float or string) is the amount in BTC
         ...
       },
       ...
     ] */
  recipients: Array<unknown>
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
       "add_to_wallet": bool,       (boolean, optional, default=true) When false, returns the serialized transaction without broadcasting or adding it to the wallet
       "fee_rate": amount,          (numeric or string, optional, default=not set, fall back to wallet fee estimation) Specify a fee rate in sat/vB.
       "include_watching": bool,    (boolean, optional, default=true for watch-only wallets, otherwise false) Also select inputs which are watch-only.
                                    Only solvable inputs can be used. Watch-only destinations are solvable if the public key and/or output script was imported,
                                    e.g. with 'importpubkey' or 'importmulti' with the 'pubkeys' or 'desc' field.
       "inputs": [                  (json array, optional, default=[]) Use exactly the specified inputs to build the transaction. Specifying inputs is incompatible with send_max.
         {                          (json object)
           "txid": "hex",           (string, required) The transaction id
           "vout": n,               (numeric, required) The output number
           "sequence": n,           (numeric, optional, default=depends on the value of the 'replaceable' and 'locktime' arguments) The sequence number
         },
         ...
       ], */
  options?: Json
}

/**
 * sendall ["address",{"address":amount,...},...] ( conf_target "estimate_mode" fee_rate options )
 *
 * EXPERIMENTAL warning: this call may be changed in future releases.
 * Spend the value of all (or specific) confirmed UTXOs in the wallet to one or more recipients.
 * Unconfirmed inbound UTXOs and locked UTXOs will not be spent. Sendall will respect the avoid_reuse wallet flag.
 * If your wallet contains many small inputs, either because it received tiny payments or as a result of accumulating change, consider using `send_max` to exclude inputs that are worth less than the fees needed to spend them.
 *
 */
export function sendAll(params: SendAllParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'sendall', params: methodParams }, bitcoind)
}
