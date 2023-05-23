// Auto synced from github actions. Don't change this file

import { Bitcoind, Json } from '../../types'
import request from '../../rpc-request'

type GetBlockTemplateParams = {
  bitcoind: Bitcoind
  /* {
       "mode": "str",       (string, optional) This must be set to "template", "proposal" (see BIP 23), or omitted
       "capabilities": [    (json array, optional) A list of strings
         "str",             (string) client side supported feature, 'longpoll', 'coinbasevalue', 'proposal', 'serverlist', 'workid'
         ...
       ], */
  template_request?: Json
}

/**
 * getblocktemplate ( "template_request" )
 *
 * If the request parameters include a 'mode' key, that is used to explicitly select between the default 'template' request or a 'proposal'.
 * It returns data needed to construct a block to work on.
 * For full specification, see BIPs 22, 23, 9, and 145:
 *     https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki
 *     https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki
 *     https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes
 *     https://github.com/bitcoin/bips/blob/master/bip-0145.mediawiki
 *
 */
export function getBlockTemplate(params: GetBlockTemplateParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getblocktemplate', params: methodParams }, bitcoind)
}
