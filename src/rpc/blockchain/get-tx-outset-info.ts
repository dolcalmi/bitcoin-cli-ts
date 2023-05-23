// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetTxOutsetInfoParams = {
  bitcoind: Bitcoind
  /* Which UTXO set hash should be calculated. Options: 'hash_serialized_2' (the legacy algorithm), 'muhash', 'none'. */
  hash_type?: string
  /* The block hash or height of the target height (only available with coinstatsindex). */
  hash_or_height?: string | number
  /* Use coinstatsindex, if available. */
  use_index?: boolean
}

/**
 * gettxoutsetinfo ( "hash_type" hash_or_height use_index )
 *
 * Returns statistics about the unspent transaction output set.
 * Note this call may take some time if you are not using coinstatsindex.
 *
 */
export function getTxOutsetInfo(params: GetTxOutsetInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'gettxoutsetinfo', params: methodParams }, bitcoind)
}
