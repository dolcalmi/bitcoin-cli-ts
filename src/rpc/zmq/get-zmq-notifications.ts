// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type GetZmqNotificationsParams = {
  bitcoind: Bitcoind
}

/**
 * getzmqnotifications
 *
 * Returns information about the active ZeroMQ notifications.
 *
 */
export function getZmqNotifications(params: GetZmqNotificationsParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getzmqnotifications', params: methodParams },
    bitcoind
  )
}
