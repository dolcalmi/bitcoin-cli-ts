// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SendmsgToPeerParams = {
  bitcoind: Bitcoind
  /* The peer to send the message to. */
  peer_id: number
  /* The message type (maximum length 12) */
  msg_type: string
  /* The serialized message body to send, in hex, without a message header */
  msg: string
}

/**
 * sendmsgtopeer peer_id "msg_type" "msg"
 *
 * Send a p2p message to a peer specified by id.
 * The message type and body must be provided, the message header will be generated.
 * This RPC is for testing only.
 *
 */
export function sendmsgToPeer(params: SendmsgToPeerParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'sendmsgtopeer', params: methodParams }, bitcoind)
}
