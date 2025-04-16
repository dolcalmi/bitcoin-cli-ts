// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type DumpTxOutsetParams = {
  bitcoind: Bitcoind
  /* Path to the output file. If relative, will be prefixed by datadir. */
  path: string
  /* The type of snapshot to create. Can be "latest" to create a snapshot of the current UTXO set or "rollback" to temporarily roll back the state of the node to a historical block before creating the snapshot of a historical UTXO set. This parameter can be omitted if a separate "rollback" named parameter is specified indicating the height or hash of a specific historical block. If "rollback" is specified and separate "rollback" named parameter is not specified, this will roll back to the latest valid snapshot block that can currently be loaded with loadtxoutset. */
  type?: string
  /* Options object that can be used to pass named arguments, listed below. */
  options?: Json
}

/**
 * dumptxoutset "path" ( "type" {"rollback":n,...} )
 *
 * Write the serialized UTXO set to a file. This can be used in loadtxoutset afterwards if this snapshot height is supported in the chainparams as well.
 * Unless the "latest" type is requested, the node will roll back to the requested height and network activity will be suspended during this process. Because of this it is discouraged to interact with the node in any other way during the execution of this call to avoid inconsistent results and race conditions, particularly RPCs that interact with blockstorage.
 * This call may take several minutes. Make sure to use no RPC timeout (bitcoin-cli -rpcclienttimeout=0)
 *
 */
export function dumpTxOutset(params: DumpTxOutsetParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'dumptxoutset', params: methodParams }, bitcoind)
}
