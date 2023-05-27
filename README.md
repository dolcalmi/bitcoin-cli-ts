# bitcoin-cli-ts

Auto-generated Bitcoin client library for Bitcoin Core JSON-RPC API

## Installation

Install the package with:

```bash
npm i bitcoin-cli-ts
# or
yarn add bitcoin-cli-ts
```

## Usage

Choose the [version](https://www.npmjs.com/package/bitcoin-cli-ts?activeTab=versions) that corresponds to your Bitcoin Core version.

We use the major and minor versions from [Bitcoin Core Releases](https://github.com/bitcoin/bitcoin/releases) and reserve the patch version for library fixes related to static code or dependencies.

### Config

```js
import { authenticatedBitcoind } from 'bitcoin-cli-ts'

const { host, username, password, port } = getBitcoinCoreRPCConfig()
const bitcoind = authenticatedBitcoind({
  protocol: 'http',
  host: host,
  username,
  password,
  timeout: 30000,
  port: parseInt(port, 10),
  walletName: wallet, // optional
})
```

### Use rpc command

```js
import { getBalance } from 'bitcoin-cli-ts'

const balance = await getBalance({ bitcoind })
```

## Test

Test with Jest framework:

```bash
yarn test
```

## Build

Build production (distribution) files in **dist** folder:

```bash
yarn build
```

It generates CommonJS (in **dist/cjs** folder), ES Modules (in **dist/esm** folder), as well as TypeScript declaration files (in **dist/types** folder).

## Local development

Run:

```bash
yarn link
# or
npm link
```

and in your test project run:

```bash
yarn link bitcoin-cli-ts
# or
npm link bitcoin-cli-ts
```

If you want to remove the symlink, run:

```bash
# in your test project
yarn unlink bitcoin-cli-ts
# or
npm unlink bitcoin-cli-ts

# in bitcoin-cli-ts folder
yarn unlink
# or
npm unlink
```

Please check more details in [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) or [yarn link](https://yarnpkg.com/cli/link)

## References

This library was developed based on:

- [developer.bitcoin.org helpers](https://github.com/bitcoin-dot-org/developer.bitcoin.org/tree/master/helpers/rpc)
- [Example TypeScript Package ](https://github.com/tomchen/example-typescript-package)
