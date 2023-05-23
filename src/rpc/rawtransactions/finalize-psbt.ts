// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type FinalizePsbtParams = {
  bitcoind: Bitcoind
  /* A base64 string of a PSBT */
  psbt: string
  /* If true and the transaction is complete,
       extract and return the complete transaction in normal network serialization instead of the PSBT. */
  extract?: boolean
}

/**
 * finalizepsbt "psbt" ( extract )
 *
 * Finalize the inputs of a PSBT. If the transaction is fully signed, it will produce a
 * network serialized transaction which can be broadcast with sendrawtransaction. Otherwise a PSBT will be
 * created which has the final_scriptSig and final_scriptWitness fields filled for inputs that are complete.
 * Implements the Finalizer and Extractor roles.
 *
 */
export function finalizePsbt(params: FinalizePsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'finalizepsbt', params: methodParams }, bitcoind)
}
