// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type HelpParams = {
  bitcoind: Bitcoind
  /* The command to get help on */
  command?: string
}

/**
 * help ( "command" )
 *
 * List all commands, or get help for a specified command.
 *
 */
export function help(params: HelpParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'help', params: methodParams }, bitcoind)
}
