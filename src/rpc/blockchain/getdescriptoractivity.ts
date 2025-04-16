// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetdescriptoractivityParams = {
  bitcoind: Bitcoind
  /* [
       "blockhash",              (string) A valid blockhash
       ...
     ] */
  blockhashes?: Array<unknown>
  /* [
       "descriptor",             (string) An output descriptor
       {                         (json object) An object with output descriptor and metadata
         "desc": "str",          (string, required) An output descriptor
         "range": n or [n,n],    (numeric or array, optional, default=1000) The range of HD chain indexes to explore (either end or [begin,end])
       },
       ...
     ] */
  scanobjects?: Array<unknown>
  /* Whether to include unconfirmed activity */
  include_mempool?: boolean
}

/**
 * getdescriptoractivity ( ["blockhash",...] [scanobjects,...] include_mempool )
 *
 * Get spend and receive activity associated with a set of descriptors for a set of blocks. This command pairs well with the `relevant_blocks` output of `scanblocks()`.
 * This call may take several minutes. If you encounter timeouts, try specifying no RPC timeout (bitcoin-cli -rpcclienttimeout=0)
 *
 */
export function getdescriptoractivity(params: GetdescriptoractivityParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getdescriptoractivity', params: methodParams },
    bitcoind
  )
}
