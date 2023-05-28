// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type SendManyParams = {
  bitcoind: Bitcoind
  /* Must be set to "" for backwards compatibility. */
  dummy?: string
  /* {
       "address": amount,    (numeric or string, required) The bitcoin address is the key, the numeric amount (can be string) in BTC is the value
       ...
     } */
  amounts: Json
  /* Ignored dummy value */
  minconf?: number
  /* A comment */
  comment?: string
  /* [
       "address",            (string) Subtract fee from this address
       ...
     ] */
  subtractfeefrom?: Array<unknown>
  /* Signal that this transaction can be replaced by a transaction (BIP 125) */
  replaceable?: boolean
  /* Confirmation target in blocks */
  conf_target?: number
  /* The fee estimate mode, must be one of (case insensitive):
       "unset"
       "economical"
       "conservative" */
  estimate_mode?: string
  /* Specify a fee rate in sat/vB. */
  fee_rate?: number | string
  /* If true, return extra information about the transaction. */
  verbose?: boolean
}

/**
 * sendmany ( "" ) {"address":amount,...} ( minconf "comment" ["address",...] replaceable conf_target "estimate_mode" fee_rate verbose )
 *
 * Send multiple times. Amounts are double-precision floating point numbers.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function sendMany(params: SendManyParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'sendmany', params: methodParams }, bitcoind)
}
