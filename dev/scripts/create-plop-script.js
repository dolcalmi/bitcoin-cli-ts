const { HelpParser, executeCommand } = require('../helpers/help-parser')

const dumpAllCommands = async () => {
  try {
    const uniqueMethodNames = new Set()
    const dump = await executeCommand(
      'docker exec bitcoind bitcoin-cli help dump_all_command_conversions'
    )
    const array = JSON.parse(dump)
    array.forEach(([methodName]) => {
      uniqueMethodNames.add(methodName)
    })

    return Array.from(uniqueMethodNames)
  } catch (error) {
    return []
  }
}

const main = async () => {
  console.log('rm -rf src/rpc')
  const helpParser = new HelpParser()
  const generalHelp = await executeCommand(
    'docker exec bitcoind bitcoin-cli help'
  )

  const help = helpParser.parseHelpOverview(generalHelp)
  const flat = help.flat()
  const allCommands = await dumpAllCommands()
  for (let cmd of allCommands) {
    if (!flat.includes(cmd)) {
      help.add('hidden', cmd)
    }
  }

  const groups = help.grouped()

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
