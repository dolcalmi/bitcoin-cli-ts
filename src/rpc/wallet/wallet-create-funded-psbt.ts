// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type WalletCreateFundedPsbtParams = {
  bitcoind: Bitcoind
  /* [
       {                              (json object)
         "txid": "hex",               (string, required) The transaction id
         "vout": n,                   (numeric, required) The output number
         "sequence": n,               (numeric, optional, default=depends on the value of the 'locktime' and 'options.replaceable' arguments) The sequence number
         "weight": n,                 (numeric, optional, default=Calculated from wallet and solving data) The maximum weight for this input, including the weight of the outpoint and sequence number. Note that signature sizes are not guaranteed to be consistent, so the maximum DER signatures size of 73 bytes should be used when considering ECDSA signatures.Remember to convert serialized sizes to weight units when necessary.
       },
       ...
     ] */
  inputs?: Array<unknown>
  /* [
       {                              (json object)
         "address": amount,           (numeric or string, required) A key-value pair. The key (string) is the bitcoin address,
                                      the value (float or string) is the amount in BTC
         ...
       },
       {                              (json object)
         "data": "hex",               (string, required) A key-value pair. The key must be "data", the value is hex-encoded data
       },
       ...
     ] */
  outputs: Array<unknown>
  /* Raw locktime. Non-0 value also locktime-activates inputs */
  locktime?: number
  /* {
       "add_inputs": bool,            (boolean, optional, default=false when "inputs" are specified, true otherwise) Automatically include coins from the wallet to cover the target amount.
                                      
       "include_unsafe": bool,        (boolean, optional, default=false) Include inputs that are not safe to spend (unconfirmed transactions from outside keys and unconfirmed replacement transactions).
                                      Warning: the resulting transaction may become invalid if one of the unsafe inputs disappears.
                                      If that happens, you will need to fund the transaction with different inputs and republish it.
       "minconf": n,                  (numeric, optional, default=0) If add_inputs is specified, require inputs with at least this many confirmations.
       "maxconf": n,                  (numeric, optional) If add_inputs is specified, require inputs with at most this many confirmations.
       "changeAddress": "str",        (string, optional, default=automatic) The bitcoin address to receive the change
       "changePosition": n,           (numeric, optional, default=random) The index of the change output
       "change_type": "str",          (string, optional, default=set by -changetype) The output type to use. Only valid if changeAddress is not specified. Options are "legacy", "p2sh-segwit", "bech32", and "bech32m".
       "includeWatching": bool,       (boolean, optional, default=true for watch-only wallets, otherwise false) Also select inputs which are watch only
       "lockUnspents": bool,          (boolean, optional, default=false) Lock selected unspent outputs
       "fee_rate": amount,            (numeric or string, optional, default=not set, fall back to wallet fee estimation) Specify a fee rate in sat/vB.
       "feeRate": amount,             (numeric or string, optional, default=not set, fall back to wallet fee estimation) Specify a fee rate in BTC/kvB.
       "subtractFeeFromOutputs": [    (json array, optional, default=[]) The outputs to subtract the fee from.
                                      The fee will be equally deducted from the amount of each specified output.
                                      Those recipients will receive less bitcoins than you enter in their corresponding amount field.
                                      If no outputs are specified here, the sender pays the fee.
         vout_index,                  (numeric) The zero-based output index, before a change output is added.
         ...
       ], */
  options?: Json
  /* Include BIP 32 derivation paths for public keys if we know them */
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
