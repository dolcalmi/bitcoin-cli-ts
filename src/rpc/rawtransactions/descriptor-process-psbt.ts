// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DescriptorProcessPsbtParams = {
  bitcoind: Bitcoind
  /* The transaction base64 string */
  psbt: string
  /* [
       "",                       (string) An output descriptor
       {                         (json object) An object with an output descriptor and extra information
         "desc": "str",          (string, required) An output descriptor
         "range": n or [n,n],    (numeric or array, optional, default=1000) Up to what index HD chains should be explored (either end or [begin,end])
       },
       ...
     ] */
  descriptors: Array<unknown>
  /* The signature hash type to sign with if not specified by the PSBT. Must be one of
       "DEFAULT"
       "ALL"
       "NONE"
       "SINGLE"
       "ALL|ANYONECANPAY"
       "NONE|ANYONECANPAY"
       "SINGLE|ANYONECANPAY" */
  sighashtype?: string
  /* Include BIP 32 derivation paths for public keys if we know them */
  bip32derivs?: boolean
  /* Also finalize inputs if possible */
  finalize?: boolean
}

/**
 * descriptorprocesspsbt "psbt" ["",{"desc":"str","range":n or [n,n]},...] ( "sighashtype" bip32derivs finalize )
 *
 * Update all segwit inputs in a PSBT with information from output descriptors, the UTXO set or the mempool.
 * Then, sign the inputs we are able to with information from the output descriptors.
 *
 */
export function descriptorProcessPsbt(params: DescriptorProcessPsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'descriptorprocesspsbt', params: methodParams },
    bitcoind
  )
}
