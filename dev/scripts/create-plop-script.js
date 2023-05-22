const { HelpParser, executeCommand } = require('../helpers/help-parser')

const main = async () => {
  console.log('rm -rf src/rpc')
  const helpParser = new HelpParser()
  const generalHelp = await executeCommand(
    'docker exec bitcoind bitcoin-cli help'
  )
  const groups = helpParser.parseHelpOverview(generalHelp).grouped()

  for (let group in groups) {
    for (let cmd of groups[group]) {
      console.log(
        `yarn plop command ${
          cmd.name
        } ${group.toLowerCase()} -f --plopfile ./dev/plopfile.js`
      )
    }
  }

  console.log('yarn check-code-fix')
  console.log('yarn tsc-check')
}

main().catch((err) => console.error(err))
