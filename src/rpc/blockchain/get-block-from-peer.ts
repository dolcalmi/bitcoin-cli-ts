// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetBlockFromPeerParams = {
  bitcoind: Bitcoind
  /* The block hash to try to fetch */
  blockhash: string
  /* The peer to fetch it from (see getpeerinfo for peer IDs) */
  peer_id: number
}

/**
 * getblockfrompeer "blockhash" peer_id
 *
 * Attempt to fetch block from a given peer.
 * We must have the header for this block, e.g. using submitheader.
 * Subsequent calls for the same block and a new peer will cause the response from the previous peer to be ignored.
 * Returns an empty JSON object if the request was successfully scheduled.
 *
 */
export function getBlockFromPeer(params: GetBlockFromPeerParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblockfrompeer', params: methodParams }, bitcoind)
}
