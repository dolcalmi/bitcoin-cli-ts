const fs = require('fs')
const path = require('path')

const toCamelCase = require('./helpers/camelize')
const {
  HelpParser,
  executeCommand,
  parseParameters,
} = require('./helpers/help-parser')

const helpParser = new HelpParser()

module.exports = function (plop) {
  plop.setHelper('capitalize', (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  })

  plop.setHelper('camelize', (text) => {
    return toCamelCase(text)
  })

  plop.setHelper('dasherize', (text) => {
    return toCamelCase(text).replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
  })

  plop.setActionType('updateAnswers', async (answers) => {
    answers.functionName = toCamelCase(answers.rpcMethod)
    answers.typeName =
      answers.functionName.charAt(0).toUpperCase() +
      answers.functionName.slice(1)

    const help = await executeCommand(
      `docker exec bitcoind bitcoin-cli help ${answers.rpcMethod}`
    )
    const command = helpParser.parseHelpCommand(help)

    answers.descriptionCommand = command.command
    answers.description =
      command.description.replace(/\n/g, '\n * ').trimEnd() || answers.rpcMethod
    answers.rpcParams =
      command && command.arguments ? parseParameters(command.arguments) : ''

    // Return a description for logging
    return 'Mutated answers with functionName, description, descriptionCommand, typeName and rpcParams'
  })

  plop.setActionType('addExportIfNotExists', function (answers, config, plop) {
    const filePath = plop.renderString(config.path, answers)
    const exportStatement = plop.renderString(config.exportStatement, answers)

    const directory = path.dirname(filePath)
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '')
    }

    // Check if the export statement already exists in the file
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const isExportExists = fileContent.includes(exportStatement)

    // Add export statement to the file if it doesn't exist
    if (!isExportExists) {
      fs.appendFileSync(filePath, `${exportStatement}\n`)
    }

    return `Export statement added to ${filePath}`
  })

  plop.setGenerator('command', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'rpcMethod',
        message: 'rpcMethod please',
      },
      {
        type: 'input',
        name: 'group',
        message: 'rpcMethod please',
      },
    ],
    actions: [
      {
        type: 'updateAnswers',
      },
      {
        type: 'add',
        path: '../src/rpc/{{group}}/{{dasherize rpcMethod}}.ts',
        templateFile: 'templates/command.hbs',
      },
      {
        type: 'addExportIfNotExists',
        path: 'src/rpc/{{group}}/index.ts',
        exportStatement: "export * from './{{dasherize rpcMethod}}'",
      },
      {
        type: 'addExportIfNotExists',
        path: 'src/rpc/index.ts',
        exportStatement: "export * from './{{group}}'",
      },
    ],
  })
}
