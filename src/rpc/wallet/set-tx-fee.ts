// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type SetTxFeeParams = {
  bitcoind: Bitcoind
  /* The transaction fee rate in BTC/kvB */
  amount: number | string
}

/**
 * settxfee amount
 *
 * Set the transaction fee rate in BTC/kvB for this wallet. Overrides the global -paytxfee command line parameter.
 * Can be deactivated by passing 0 as the fee. In that case automatic fee selection will be used by default.
 *
 */
export function setTxFee(params: SetTxFeeParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'settxfee', params: methodParams }, bitcoind)
}
