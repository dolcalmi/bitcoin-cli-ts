// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetNodeAddressesParams = {
  bitcoind: Bitcoind
  /* The maximum number of addresses to return. Specify 0 to return all known addresses. */
  count?: number
  /* Return only addresses of the specified network. Can be one of: ipv4, ipv6, onion, i2p. */
  network?: string
}

/**
 * getnodeaddresses ( count "network" )
 *
 * Return known addresses, which can potentially be used to find new nodes in the network.
 *
 */
export function getNodeAddresses(params: GetNodeAddressesParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getnodeaddresses', params: methodParams }, bitcoind)
}
