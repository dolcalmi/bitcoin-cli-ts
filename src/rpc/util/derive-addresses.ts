// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type DeriveAddressesParams = {
  bitcoind: Bitcoind
  /* The descriptor. */
  descriptor: string
  /* If a ranged descriptor is used, this specifies the end or the range (in [begin,end] notation) to derive. */
  range?: number | Array<unknown>
}

/**
 * deriveaddresses "descriptor" ( range )
 *
 * Derives one or more addresses corresponding to an output descriptor.
 * Examples of output descriptors are:
 *     pkh(<pubkey>)                                     P2PKH outputs for the given pubkey
 *     wpkh(<pubkey>)                                    Native segwit P2PKH outputs for the given pubkey
 *     sh(multi(<n>,<pubkey>,<pubkey>,...))              P2SH-multisig outputs for the given threshold and pubkeys
 *     raw(<hex script>)                                 Outputs whose scriptPubKey equals the specified hex scripts
 *     tr(<pubkey>,multi_a(<n>,<pubkey>,<pubkey>,...))   P2TR-multisig outputs for the given threshold and pubkeys
 *
 * In the above, <pubkey> either refers to a fixed public key in hexadecimal notation, or to an xpub/xprv optionally followed by one
 * or more path elements separated by "/", where "h" represents a hardened child key.
 * For more information on output descriptors, see the documentation in the doc/descriptors.md file.
 *
 */
export function deriveAddresses(params: DeriveAddressesParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'deriveaddresses', params: methodParams }, bitcoind)
}
