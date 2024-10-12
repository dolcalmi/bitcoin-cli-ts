// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type ScanTxOutsetParams = {
  bitcoind: Bitcoind
  /* The action to execute
       "start" for starting a scan
       "abort" for aborting the current scan (returns true when abort was successful)
       "status" for progress report (in %) of the current scan */
  action: string
  /* [
       "descriptor",             (string) An output descriptor
       {                         (json object) An object with output descriptor and metadata
         "desc": "str",          (string, required) An output descriptor
         "range": n or [n,n],    (numeric or array, optional, default=1000) The range of HD chain indexes to explore (either end or [begin,end])
       },
       ...
     ] */
  scanobjects?: Array<unknown>
}

/**
 * scantxoutset "action" ( [scanobjects,...] )
 *
 * Scans the unspent transaction output set for entries that match certain output descriptors.
 * Examples of output descriptors are:
 *     addr(<address>)                      Outputs whose output script corresponds to the specified address (does not include P2PK)
 *     raw(<hex script>)                    Outputs whose output script equals the specified hex-encoded bytes
 *     combo(<pubkey>)                      P2PK, P2PKH, P2WPKH, and P2SH-P2WPKH outputs for the given pubkey
 *     pkh(<pubkey>)                        P2PKH outputs for the given pubkey
 *     sh(multi(<n>,<pubkey>,<pubkey>,...)) P2SH-multisig outputs for the given threshold and pubkeys
 *     tr(<pubkey>)                         P2TR
 *     tr(<pubkey>,{pk(<pubkey>)})          P2TR with single fallback pubkey in tapscript
 *     rawtr(<pubkey>)                      P2TR with the specified key as output key rather than inner
 *     wsh(and_v(v:pk(<pubkey>),after(2)))  P2WSH miniscript with mandatory pubkey and a timelock
 *
 * In the above, <pubkey> either refers to a fixed public key in hexadecimal notation, or to an xpub/xprv optionally followed by one
 * or more path elements separated by "/", and optionally ending in "/*" (unhardened), or "/*'" or "/*h" (hardened) to specify all
 * unhardened or hardened child keys.
 * In the latter case, a range needs to be specified by below if different from 1000.
 * For more information on output descriptors, see the documentation in the doc/descriptors.md file.
 *
 */
export function scanTxOutset(params: ScanTxOutsetParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'scantxoutset', params: methodParams }, bitcoind)
}
