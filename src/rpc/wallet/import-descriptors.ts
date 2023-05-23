// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ImportDescriptorsParams = {
  bitcoind: Bitcoind
  /* [
       {                                    (json object)
         "desc": "str",                     (string, required) Descriptor to import.
         "active": bool,                    (boolean, optional, default=false) Set this descriptor to be the active descriptor for the corresponding output type/externality
         "range": n or [n,n],               (numeric or array) If a ranged descriptor is used, this specifies the end or the range (in the form [begin,end]) to import
         "next_index": n,                   (numeric) If a ranged descriptor is set to active, this specifies the next index to generate addresses from
         "timestamp": timestamp | "now",    (integer / string, required) Time from which to start rescanning the blockchain for this descriptor, in UNIX epoch time
                                            Use the string "now" to substitute the current synced blockchain time.
                                            "now" can be specified to bypass scanning, for outputs which are known to never have been used, and
                                            0 can be specified to scan the entire blockchain. Blocks up to 2 hours before the earliest timestamp
                                            of all descriptors being imported will be scanned.
         "internal": bool,                  (boolean, optional, default=false) Whether matching outputs should be treated as not incoming payments (e.g. change)
         "label": "str",                    (string, optional, default="") Label to assign to the address, only allowed with internal=false. Disabled for ranged descriptors
       },
       ...
     ] */
  requests: Array<unknown>
}

/**
 * importdescriptors "requests"
 *
 * Import descriptors. This will trigger a rescan of the blockchain based on the earliest timestamp of all descriptors being imported. Requires a new wallet backup.
 * Note: This call can take over an hour to complete if using an early timestamp; during that time, other rpc calls
 * may report that the imported keys, addresses or scripts exist but related transactions are still missing.
 *
 */
export function importDescriptors(params: ImportDescriptorsParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'importdescriptors', params: methodParams },
    bitcoind
  )
}
