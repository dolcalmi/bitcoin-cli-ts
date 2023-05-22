import { Bitcoind } from './types'

type BitcoindConfig = Omit<Bitcoind, 'url' | 'authHeader'>

const defaultConfig: BitcoindConfig = {
  protocol: 'http',
  host: '127.0.0.1',
  username: 'rpcuser',
  password: '',
  timeout: 15000,
  port: 18443,
  walletName: '',
}

export function authenticatedBitcoind(config: BitcoindConfig): Bitcoind {
  const mergedConfig = {
    ...defaultConfig,
    ...config,
  }
  const { protocol, host, port, walletName, username, password } = mergedConfig
  const walletPath = walletName ? `/wallet/${walletName}` : '/'
  const auth = Buffer.from(`${username}:${password}`).toString('base64')
  return {
    ...mergedConfig,
    url: `${protocol}://${host}:${port}${walletPath}`,
    authHeader: `Basic ${auth}`,
  }
}
