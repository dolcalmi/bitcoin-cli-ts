// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type EchoIpcParams = {
  bitcoind: Bitcoind
  /* The string to echo */
  arg: string
}

/**
 * echoipc "arg"
 *
 * Echo back the input argument, passing it through a spawned process in a multiprocess build.
 * This command is for testing.
 *
 */
export function echoIpc(params: EchoIpcParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'echoipc', params: methodParams }, bitcoind)
}
