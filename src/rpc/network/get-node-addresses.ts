// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetNodeAddressesParams = {
  bitcoind: Bitcoind
  /* The maximum number of addresses to return. Specify 0 to return all known addresses. */
  count?: number
  /* Return only addresses of the specified network. Can be one of: ipv4, ipv6, onion, i2p, cjdns. */
  network?: string
}

/**
 * getnodeaddresses ( count "network" )
 *
 * Return known addresses, after filtering for quality and recency.
 * These can potentially be used to find new peers in the network.
 * The total number of addresses known to the node may be higher.
 *
 */
export function getNodeAddresses(params: GetNodeAddressesParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getnodeaddresses', params: methodParams }, bitcoind)
}
