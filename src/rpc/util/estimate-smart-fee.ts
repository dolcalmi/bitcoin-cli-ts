// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types'
import request from '../../rpc-request'

type EstimateSmartFeeParams = {
  bitcoind: Bitcoind
  /* Confirmation target in blocks (1 - 1008) */
  conf_target: number
  /* The fee estimate mode.
       unset, economical, conservative 
       unset means no mode set (default mode will be used). 
       economical estimates use a shorter time horizon, making them more
       responsive to short-term drops in the prevailing fee market. This mode
       potentially returns a lower fee rate estimate.
       conservative estimates use a longer time horizon, making them
       less responsive to short-term drops in the prevailing fee market. This mode
       potentially returns a higher fee rate estimate. */
  estimate_mode?: string
}

/**
 * estimatesmartfee conf_target ( "estimate_mode" )
 *
 * Estimates the approximate fee per kilobyte needed for a transaction to begin
 * confirmation within conf_target blocks if possible and return the number of blocks
 * for which the estimate is valid. Uses virtual transaction size as defined
 * in BIP 141 (witness data is discounted).
 *
 */
export function estimateSmartFee(params: EstimateSmartFeeParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'estimatesmartfee', params: methodParams }, bitcoind)
}
