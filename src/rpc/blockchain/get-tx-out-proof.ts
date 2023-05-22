// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetTxOutProofParams = {
  bitcoind: Bitcoind
  /* [
       "txid",    (string) A transaction hash
       ...
     ] */
  txids: Array<unknown>
  /* If specified, looks for txid in the block with this hash */
  blockhash?: string
}

/**
 * gettxoutproof ["txid",...] ( "blockhash" )
 *
 * Returns a hex-encoded proof that "txid" was included in a block.
 * NOTE: By default this function only works sometimes. This is when there is an
 * unspent output in the utxo for this transaction. To make it always work,
 * you need to maintain a transaction index, using the -txindex command line option or
 * specify the block in which the transaction is included manually (by blockhash).
 *
 */
export function getTxOutProof(params: GetTxOutProofParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'gettxoutproof', params: methodParams }, bitcoind)
}
