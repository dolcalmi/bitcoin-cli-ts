// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type EstimateRawFeeParams = {
  bitcoind: Bitcoind
  /* Confirmation target in blocks (1 - 1008) */
  conf_target: number
  /* The proportion of transactions in a given feerate range that must have been
       confirmed within conf_target in order to consider those feerates as high enough and proceed to check
       lower buckets. */
  threshold?: number
}

/**
 * estimaterawfee conf_target ( threshold )
 *
 * WARNING: This interface is unstable and may disappear or change!
 * WARNING: This is an advanced API call that is tightly coupled to the specific
 * implementation of fee estimation. The parameters it can be called with
 * and the results it returns will change if the internal implementation changes.
 * Estimates the approximate fee per kilobyte needed for a transaction to begin
 * confirmation within conf_target blocks if possible. Uses virtual transaction size as
 * defined in BIP 141 (witness data is discounted).
 *
 */
export function estimateRawFee(params: EstimateRawFeeParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'estimaterawfee', params: methodParams }, bitcoind)
}
