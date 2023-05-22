import { request } from 'undici'
import { JSONRPCClient as Client } from 'json-rpc-2.0'

import { Json } from './types'

type Command = {
  method: string
  params: Json | Array<Json | string | number | boolean>
}

type ConnectionSettings = {
  url: string
  authHeader: string
  timeout?: number
}

const sendRequest = async (payload: Json, clientParams: ConnectionSettings) => {
  const { url, authHeader } = clientParams
  const reqHeaders = {
    Authorization: authHeader,
    'Content-Type': 'application/json',
  }
  const { body, statusCode, headers } = await request(url, {
    method: 'POST',
    headers: reqHeaders,
    body: JSON.stringify(payload),
  })

  if (statusCode !== 200) {
    if (statusCode === 401)
      return Promise.reject(new Error('Invalid credentials'))
    const contentType = headers['content-type']
    const response =
      contentType === 'application/json' ? await body.json() : await body.text()
    return Promise.reject(response.error || new Error(response))
  }

  client.receive(await body.json())
}

const client = new Client<ConnectionSettings>(sendRequest)

export default async function (cmd: Command, settings: ConnectionSettings) {
  return client
    .timeout(settings.timeout || 15000)
    .request(cmd.method, cmd.params, settings)
}
