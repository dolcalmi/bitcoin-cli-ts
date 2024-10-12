// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type SendParams = {
  bitcoind: Bitcoind
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
  /* Confirmation target in blocks */
  conf_target?: number
  /* The fee estimate mode, must be one of (case insensitive):
       unset, economical, conservative 
       unset means no mode set (economical mode is used if the transaction is replaceable;
       otherwise, conservative mode is used). 
       economical estimates use a shorter time horizon, making them more
       responsive to short-term drops in the prevailing fee market. This mode
       potentially returns a lower fee rate estimate.
       conservative estimates use a longer time horizon, making them
       less responsive to short-term drops in the prevailing fee market. This mode
       potentially returns a higher fee rate estimate. */
  estimate_mode?: string
  /* Specify a fee rate in sat/vB. */
  fee_rate?: number | string
  /* {
       "pubkeys": [          (json array, optional, default=[]) Public keys involved in this transaction.
         "pubkey",           (string) A public key
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
