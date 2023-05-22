export type Json = { [key: string]: unknown }

export type Bitcoind = {
  protocol: 'http' | 'https'
  username: string
  password: string
  host: string
  port: number
  url: string
  authHeader: string
  walletName?: string
  timeout?: number
}
