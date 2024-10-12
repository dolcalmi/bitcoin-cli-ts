// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SendToAddressParams = {
  bitcoind: Bitcoind
  /* The bitcoin address to send to. */
  address: string
  /* The amount in BTC to send. eg 0.1 */
  amount: number | string
  /* A comment used to store what the transaction is for.
       This is not part of the transaction, just kept in your wallet. */
  comment?: string
  /* A comment to store the name of the person or organization
       to which you're sending the transaction. This is not part of the 
       transaction, just kept in your wallet. */
  comment_to?: string
  /* The fee will be deducted from the amount being sent.
       The recipient will receive less bitcoins than you enter in the amount field. */
  subtractfeefromamount?: boolean
  /* Signal that this transaction can be replaced by a transaction (BIP 125) */
  replaceable?: boolean
  /* Confirmation target in blocks */
  conf_target?: number
  /* The fee estimate mode, must be one of (case insensitive):
       unset, economical, conservative 
       unset means no mode set (economical mode is used if the transaction is replaceable;
       otherwise, conservative mode is used). 
       economical estimates use a shorter time horizon, making them more
       responsive to short-term drops in the prevailing fee market. This mode
       potentially returns a lower fee rate estimate.
       conservative estimates use a longer time horizon, making them
       less responsive to short-term drops in the prevailing fee market. This mode
       potentially returns a higher fee rate estimate. */
  estimate_mode?: string
  /* (only available if avoid_reuse wallet flag is set) Avoid spending from dirty addresses; addresses are considered
       dirty if they have previously been used in a transaction. If true, this also activates avoidpartialspends, grouping outputs by their addresses. */
  avoid_reuse?: boolean
  /* Specify a fee rate in sat/vB. */
  fee_rate?: number | string
  /* If true, return extra information about the transaction. */
  verbose?: boolean
}

/**
 * sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount replaceable conf_target "estimate_mode" avoid_reuse fee_rate verbose )
 *
 * Send an amount to a given address.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function sendToAddress(params: SendToAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'sendtoaddress', params: methodParams }, bitcoind)
}
