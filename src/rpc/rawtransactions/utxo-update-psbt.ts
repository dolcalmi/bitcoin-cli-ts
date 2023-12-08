// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type UtxoUpdatePsbtParams = {
  bitcoind: Bitcoind
  /* A base64 string of a PSBT */
  psbt: string
  /* [
       "",                       (string) An output descriptor
       {                         (json object) An object with an output descriptor and extra information
         "desc": "str",          (string, required) An output descriptor
         "range": n or [n,n],    (numeric or array, optional, default=1000) Up to what index HD chains should be explored (either end or [begin,end])
       },
       ...
     ] */
  descriptors?: Array<unknown>
}

/**
 * utxoupdatepsbt "psbt" ( ["",{"desc":"str","range":n or [n,n]},...] )
 *
 * Updates all segwit inputs and outputs in a PSBT with data from output descriptors, the UTXO set, txindex, or the mempool.
 *
 */
export function utxoUpdatePsbt(params: UtxoUpdatePsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'utxoupdatepsbt', params: methodParams }, bitcoind)
}
