// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type FundRawTransactionParams = {
  bitcoind: Bitcoind
  /* The hex string of the raw transaction */
  hexstring: string
  /* Options object that can be used to pass named arguments, listed below. For backward compatibility: passing in a true instead of an object will result in {"includeWatching":true} */
  options?: Json
  /* {
       "pubkeys": [        (json array, optional, default=[]) Public keys involved in this transaction.
         "pubkey",         (string) A public key
         ...
       ], */
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
 * Only pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only.
 * Note that if specifying an exact fee rate, the resulting transaction may have a higher fee rate
 * if the transaction has unconfirmed inputs. This is because the wallet will attempt to make the
 * entire package have the given fee rate, not the resulting transaction.
 *
 */
export function fundRawTransaction(params: FundRawTransactionParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'fundrawtransaction', params: methodParams },
    bitcoind
  )
}
