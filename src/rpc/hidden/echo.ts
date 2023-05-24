// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type EchoParams = {
  bitcoind: Bitcoind
  /*  */
  arg0?: string
  /*  */
  arg1?: string
  /*  */
  arg2?: string
  /*  */
  arg3?: string
  /*  */
  arg4?: string
  /*  */
  arg5?: string
  /*  */
  arg6?: string
  /*  */
  arg7?: string
  /*  */
  arg8?: string
  /*  */
  arg9?: string
}

/**
 * echo ( "arg0" "arg1" "arg2" "arg3" "arg4" "arg5" "arg6" "arg7" "arg8" "arg9" )
 *
 * Simply echo back the input arguments. This command is for testing.
 * It will return an internal bug report when arg9='trigger_internal_bug' is passed.
 * The difference between echo and echojson is that echojson has argument conversion enabled in the client-side table in bitcoin-cli and the GUI. There is no server-side difference.
 *
 */
export function echo(params: EchoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'echo', params: methodParams }, bitcoind)
}
