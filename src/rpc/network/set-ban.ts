// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SetBanParams = {
  bitcoind: Bitcoind
  /* The IP/Subnet (see getpeerinfo for nodes IP) with an optional netmask (default is /32 = single IP) */
  subnet: string
  /* 'add' to add an IP/Subnet to the list, 'remove' to remove an IP/Subnet from the list */
  command: string
  /* time in seconds how long (or until when if [absolute] is set) the IP is banned (0 or empty means using the default time of 24h which can also be overwritten by the -bantime startup argument) */
  bantime?: number
  /* If set, the bantime must be an absolute timestamp expressed in UNIX epoch time */
  absolute?: boolean
}

/**
 * setban "subnet" "command" ( bantime absolute )
 *
 * Attempts to add or remove an IP/Subnet from the banned list.
 *
 */
export function setBan(params: SetBanParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'setban', params: methodParams }, bitcoind)
}
