// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetMemoryInfoParams = {
  bitcoind: Bitcoind
  /* determines what kind of information is returned.
       - "stats" returns general statistics about memory usage in the daemon.
       - "mallocinfo" returns an XML string describing low-level heap state (only available if compiled with glibc 2.10+). */
  mode?: string
}

/**
 * getmemoryinfo ( "mode" )
 *
 * Returns an object containing information about memory usage.
 *
 */
export function getMemoryInfo(params: GetMemoryInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getmemoryinfo', params: methodParams }, bitcoind)
}
