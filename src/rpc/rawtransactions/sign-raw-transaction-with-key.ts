// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SignRawTransactionWithKeyParams = {
  bitcoind: Bitcoind
  /* The transaction hex string */
  hexstring: string
  /* [
       "privatekey",                (string) private key in base58-encoding
       ...
     ] */
  privkeys: Array<unknown>
  /* [
       {                            (json object)
         "txid": "hex",             (string, required) The transaction id
         "vout": n,                 (numeric, required) The output number
         "scriptPubKey": "hex",     (string, required) script key
         "redeemScript": "hex",     (string, optional) (required for P2SH) redeem script
         "witnessScript": "hex",    (string, optional) (required for P2WSH or P2SH-P2WSH) witness script
         "amount": amount,          (numeric or string, optional) (required for Segwit inputs) the amount spent
       },
       ...
     ] */
  prevtxs?: Array<unknown>
  /* The signature hash type. Must be one of:
       "DEFAULT"
       "ALL"
       "NONE"
       "SINGLE"
       "ALL|ANYONECANPAY"
       "NONE|ANYONECANPAY"
       "SINGLE|ANYONECANPAY" */
  sighashtype?: string
}

/**
 * signrawtransactionwithkey "hexstring" ["privatekey",...] ( [{"txid":"hex","vout":n,"scriptPubKey":"hex","redeemScript":"hex","witnessScript":"hex","amount":amount},...] "sighashtype" )
 *
 * Sign inputs for raw transaction (serialized, hex-encoded).
 * The second argument is an array of base58-encoded private
 * keys that will be the only keys used to sign the transaction.
 * The third optional argument (may be null) is an array of previous transaction outputs that
 * this transaction depends on but may not yet be in the block chain.
 *
 */
export function signRawTransactionWithKey(
  params: SignRawTransactionWithKeyParams
) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'signrawtransactionwithkey', params: methodParams },
    bitcoind
  )
}
