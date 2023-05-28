// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type ScanBlocksParams = {
  bitcoind: Bitcoind
  /* The action to execute
       "start" for starting a scan
       "abort" for aborting the current scan (returns true when abort was successful)
       "status" for progress report (in %) of the current scan */
  action: string
  /* [
       "descriptor",                      (string) An output descriptor
       {                                  (json object) An object with output descriptor and metadata
         "desc": "str",                   (string, required) An output descriptor
         "range": n or [n,n],             (numeric or array, optional, default=1000) The range of HD chain indexes to explore (either end or [begin,end])
       },
       ...
     ] */
  scanobjects?: Array<unknown>
  /* Height to start to scan from */
  start_height?: number
  /* Height to stop to scan */
  stop_height?: number
  /* The type name of the filter */
  filtertype?: string
  /* {
       "filter_false_positives": bool,    (boolean, optional, default=false) Filter false positives (slower and may fail on pruned nodes). Otherwise they may occur at a rate of 1/M
     } */
  options?: Json
}

/**
 * scanblocks "action" ( [scanobjects,...] start_height stop_height "filtertype" "options" )
 *
 * Return relevant blockhashes for given descriptors (requires blockfilterindex).
 * This call may take several minutes. Make sure to use no RPC timeout (bitcoin-cli -rpcclienttimeout=0)
 *
 */
export function scanBlocks(params: ScanBlocksParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'scanblocks', params: methodParams }, bitcoind)
}
