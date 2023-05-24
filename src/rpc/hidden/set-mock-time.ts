// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SetMockTimeParams = {
  bitcoind: Bitcoind
  /* UNIX epoch time
       Pass 0 to go back to using the system time. */
  timestamp: number
}

/**
 * setmocktime timestamp
 *
 * Set the local time to given timestamp (-regtest only)
 *
 */
export function setMockTime(params: SetMockTimeParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'setmocktime', params: methodParams }, bitcoind)
}
