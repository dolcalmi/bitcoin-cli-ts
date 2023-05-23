// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type WalletProcessPsbtParams = {
  bitcoind: Bitcoind
  /* The transaction base64 string */
  psbt: string
  /* Also sign the transaction when updating */
  sign?: boolean
  /* The signature hash type to sign with if not specified by the PSBT. Must be one of
       "DEFAULT"
       "ALL"
       "NONE"
       "SINGLE"
       "ALL|ANYONECANPAY"
       "NONE|ANYONECANPAY"
       "SINGLE|ANYONECANPAY" */
  sighashtype?: string
  /* Include BIP 32 derivation paths for public keys if we know them */
  bip32derivs?: boolean
}

/**
 * walletprocesspsbt "psbt" ( sign "sighashtype" bip32derivs )
 *
 * Update a PSBT with input information from our wallet and then sign inputs
 * that we can sign for.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 *
 */
export function walletProcessPsbt(params: WalletProcessPsbtParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'walletprocesspsbt', params: methodParams },
    bitcoind
  )
}
