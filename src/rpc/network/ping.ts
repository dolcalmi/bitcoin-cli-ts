// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type PingParams = {
  bitcoind: Bitcoind
}

/**
 * ping
 *
 * Requests that a ping be sent to all other nodes, to measure ping time.
 * Results provided in getpeerinfo, pingtime and pingwait fields are decimal seconds.
 * Ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping.
 *
 */
export function ping(params: PingParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'ping', params: methodParams }, bitcoind)
}
