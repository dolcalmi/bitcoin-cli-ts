// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type FundRawTransactionParams = {
  bitcoind: Bitcoind
  /* The hex string of the raw transaction */
  hexstring: string
  /* {                            (json object)
           "txid": "hex",             (string, required) The transaction id
           "vout": n,                 (numeric, required) The output index
           "weight": n,               (numeric, required) The maximum weight for this input, including the weight of the outpoint and sequence number. Note that serialized signature sizes are not guaranteed to be consistent, so the maximum DER signatures size of 73 bytes should be used when considering ECDSA signatures.Remember to convert serialized sizes to weight units when necessary.
         }, */
  options?: Json
  /* Whether the transaction hex is a serialized witness transaction.
       If iswitness is not present, heuristic tests will be used in decoding.
       If true, only witness deserialization will be tried.
       If false, only non-witness deserialization will be tried.
       This boolean should reflect whether the transaction has inputs
       (e.g. fully valid, or on-chain transactions), if known by the caller. */
  iswitness?: boolean
}

/**
 * fundrawtransaction "hexstring" ( options iswitness )
 *
 * If the transaction has no inputs, they will be automatically selected to meet its out value.
 * It will add at most one change output to the outputs.
 * No existing outputs will be modified unless "subtractFeeFromOutputs" is specified.
 * Note that inputs which were signed may need to be resigned after completion since in/outputs have been added.
 * The inputs added will not be signed, use signrawtransactionwithkey
 * or signrawtransactionwithwallet for that.
 * All existing inputs must either have their previous output transaction be in the wallet
 * or be in the UTXO set. Solving data must be provided for non-wallet inputs.
 * Note that all inputs selected must be of standard form and P2SH scripts must be
 * in the wallet using importaddress or addmultisigaddress (to calculate fees).
 * You can see whether this is the case by checking the "solvable" field in the listunspent output.
 * Only pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only
 *
 */
export function fundRawTransaction(params: FundRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'fundrawtransaction', params: methodParams },
    bitcoind
  )
}
