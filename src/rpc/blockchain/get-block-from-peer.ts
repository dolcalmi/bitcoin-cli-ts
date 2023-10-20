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
 * Subsequent calls for the same block may cause the response from the previous peer to be ignored.
 * Peers generally ignore requests for a stale block that they never fully verified, or one that is more than a month old.
 * When a peer does not respond with a block, we will disconnect.
 * Note: The block could be re-pruned as soon as it is received.
 * Returns an empty JSON object if the request was successfully scheduled.
 *
 */
export function getBlockFromPeer(params: GetBlockFromPeerParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblockfrompeer', params: methodParams }, bitcoind)
}
