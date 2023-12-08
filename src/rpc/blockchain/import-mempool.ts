// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type ImportMempoolParams = {
  bitcoind: Bitcoind
  /* The mempool file */
  filepath: string
  /* Options object that can be used to pass named arguments, listed below.
       Warning: Importing untrusted metadata may lead to unexpected issues and undesirable behavior.
       It will be added to any existing fee deltas.
       The fee delta can be set by the prioritisetransaction RPC.
       Warning: Importing untrusted metadata may lead to unexpected issues and undesirable behavior.
       Only set this bool if you understand what it does.
       Warning: Importing untrusted metadata may lead to unexpected issues and undesirable behavior. */
  options?: Json
}

/**
 * importmempool "filepath" ( options )
 *
 * Import a mempool.dat file and attempt to add its contents to the mempool.
 * Warning: Importing untrusted files is dangerous, especially if metadata from the file is taken over.
 *
 */
export function importMempool(params: ImportMempoolParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'importmempool', params: methodParams }, bitcoind)
}
