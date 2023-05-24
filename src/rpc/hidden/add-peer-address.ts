// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type AddPeerAddressParams = {
  bitcoind: Bitcoind
  /* The IP address of the peer */
  address: string
  /* The port of the peer */
  port: number
  /* If true, attempt to add the peer to the tried addresses table */
  tried?: boolean
}

/**
 * addpeeraddress "address" port ( tried )
 *
 * Add the address of a potential peer to the address manager. This RPC is for testing only.
 *
 */
export function addPeerAddress(params: AddPeerAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'addpeeraddress', params: methodParams }, bitcoind)
}
