const { exec } = require('child_process')

class CommandList {
  constructor() {
    this.commandsByGroup = {}
  }
  add(group, command) {
    if (!this.commandsByGroup[group]) {
      this.commandsByGroup[group] = []
    }
    const name = command.split(' ')[0]
    this.commandsByGroup[group].push({
      name,
      type: '',
      description: '',
    })
  }
  grouped() {
    return this.commandsByGroup
  }
  flat() {
    const commands = []
    for (const group in this.commandsByGroup) {
      for (const command of this.commandsByGroup[group]) {
        commands.push(command.name)
      }
    }
    return commands.sort()
  }
}
var Section
;(function (Section) {
  Section['command'] = 'command'
  Section['description'] = 'description'
  Section['result'] = 'result'
  Section['literalResult'] = 'literal_result'
  Section['pastResult'] = 'past_result'
  Section['arguments'] = 'arguments'
  Section['literalArgument'] = 'literal_argument'
  Section['examples'] = 'examples'
})(Section || (Section = {}))
class HelpParser {
  constructor() {
    this.section = Section.command
    this.literalDescription = false
    this.jsonLevel = 0
  }
  parseHelpResult(resultLine) {
    const match = resultLine.match(/([^\s]*)\s+\((.*)\)\s+(.*)/)
    if (match) {
      let name = match[1]
      if (name[0] === '"' && name[name.length - 1] === '"') {
        name = name.slice(1, -1)
      }
      return {
        format: 'table',
        name,
        type: match[2],
        description: match[3],
      }
    } else {
      return null
    }
  }
  parseHelpArgument(argumentLine) {
    const match = argumentLine.match(/\d\.\s+([^\s]*)\s+\((.*?)\)\s*(.*)/)
    if (match) {
      let name = match[1]
      if (name[0] === '"' && name[name.length - 1] === '"') {
        name = name.slice(1, -1)
      }
      let typeMatch = match[2].split(',')
      let type = typeMatch[0]
      let optional = false
      let defaultValue
      if (typeMatch.length > 1) {
        optional = typeMatch[1].trim() === 'optional'
        if (typeMatch.length > 2) {
          let defaultMatch = typeMatch[2].match(/default=(.*)/)
          if (defaultMatch) {
            let defaultVal = defaultMatch[1].trim()
            defaultValue = isNaN(Number(defaultVal))
              ? defaultVal
              : Number(defaultVal)
          }
        }
      }
      return {
        name,
        type,
        optional,
        default: defaultValue,
        description: match[3],
      }
    } else {
      return null
    }
  }
  nextSection(line, helpData) {
    const previousSection = this.section
    const resultMatch = line.match(/^Result:?([^:]*):?$/)
    if (
      resultMatch &&
      (line.includes(':') || line === 'Result' || line.startsWith('Result ('))
    ) {
      this.section = Section.result
      helpData.results.push({ titleExtension: resultMatch[1] })
    } else if (line === 'Arguments:') {
      this.section = Section.arguments
    } else if (line.match(/Examples?:/)) {
      this.section = Section.examples
    }
    return previousSection !== this.section
  }
  checkOpeningJson(line) {
    if (line.endsWith('},') || line.endsWith('],')) {
      line = line.slice(0, -1)
    }
    const match = line.match(/^ *([\[{])/)
    if (match) {
      const pairs = [
        ['{', '}'],
        ['[', ']'],
      ]
      for (const pair of pairs) {
        if (match[1] === pair[0] && line.slice(-pair[1].length) !== pair[1]) {
          this.jsonLevel += 1
          return
        }
      }
    }
  }
  parseHelpOverview(helpText) {
    const commandList = new CommandList()
    let group = ''
    for (const line of helpText.split('\n')) {
      const pattern = /^== (.*) ==/
      const match = line.match(pattern)
      if (match) {
        group = match[1]
      } else {
        if (line.length > 0) {
          commandList.add(group, line.trimRight())
        }
      }
    }
    return commandList
  }
  parseHelpCommand(helpText) {
    this.section = Section.command
    this.literalDescription = false
    const helpData = {
      command: '',
      description: '',
      results: [],
      arguments: [],
      examples: [],
    }
    for (const line of helpText.split('\n')) {
      switch (this.section) {
        case Section.command:
          helpData.command = line.trimRight()
          this.section = Section.description
          break
        case Section.description:
          if (!this.nextSection(line, helpData)) {
            if (line) {
              if (line.startsWith(' ')) {
                this.literalDescription = true
              } else if (this.literalDescription) {
                helpData.description += '\n'
                this.literalDescription = false
              }
              if (
                helpData.description &&
                ['.', ':'].includes(helpData.description.slice(-2))
              ) {
                helpData.description += '\n'
              }
              helpData.description += line.trimRight() + '\n'
            }
          }
          break
        case Section.arguments:
          if (!this.nextSection(line, helpData)) {
            if (line) {
              const argument = this.parseHelpArgument(line)
              if (argument) {
                helpData.arguments.push(argument)
              } else if (helpData.arguments.length > 0) {
                const lastArgument =
                  helpData.arguments[helpData.arguments.length - 1]
                if (lastArgument) {
                  this.checkOpeningJson(line)
                  if (this.jsonLevel > 0) {
                    lastArgument.literalDescription = line + '\n'
                    this.section = Section.literalArgument
                  } else if (line.startsWith(' ')) {
                    if (lastArgument.description) {
                      lastArgument.description += '\n       '
                    }
                    lastArgument.description += line.trimLeft()
                  }
                }
              }
            }
          }
          break
        case Section.literalArgument:
          const lastArgument = helpData.arguments[helpData.arguments.length - 1]
          lastArgument.literalDescription += line + '\n'
          this.checkOpeningJson(line)
          if (/^ *[\]}]/.test(line)) {
            this.jsonLevel -= 1
            if (this.jsonLevel === 0) {
              this.section = Section.arguments
            }
          }
          break
        case Section.result:
          if (!this.nextSection(line, helpData)) {
            if (
              line.startsWith('{') ||
              (line.startsWith('[') && !line.includes(']'))
            ) {
              this.section = Section.literalResult
              const resultData = helpData.results[helpData.results.length - 1]
              resultData.format = 'literal'
              resultData.text = '  ' + line + '\n'
            } else if (line && !line.startsWith(' ')) {
              const resultDataLine = this.parseHelpResult(line)
              const resultData = helpData.results[helpData.results.length - 1]
              if (resultDataLine) {
                Object.assign(resultData, resultDataLine)
              } else {
                resultData.format = 'literal'
                resultData.text = '  ' + line + '\n'
              }
              this.section = Section.pastResult
            }
          }
          break
        case Section.literalResult:
          const lastResult = helpData.results[helpData.results.length - 1]
          lastResult.text += '  ' + line.trimRight() + '\n'
          if (line === '}' || line === ']') {
            this.section = Section.pastResult
          }
          break
        case Section.pastResult:
          this.nextSection(line, helpData)
          break
        case Section.examples:
          if (line) {
            helpData.examples.push(line)
          }
          break
      }
    }
    this.fixup(helpData)
    return helpData
  }
  fixup(helpData) {
    const command = helpData.command.split(' ')[0]
    if (command === 'getblock' || command === 'getblockheader') {
      helpData.description = helpData.description.replace('<hash>', "'hash'")
    }
  }
}

const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return
      }
      if (stderr) {
        reject(stderr)
        return
      }
      resolve(stdout)
    })
  })
}

const parseParameters = (params) => {
  let paramsString = ''

  for (const argument of params) {
    const { name, type, optional, description, literalDescription } = argument
    const optionalSymbol = optional ? '?' : ''
    const parsedType = type
      .replace('json array', 'Array<unknown>')
      .replace('numeric', 'number')
      .replace('json object', 'Json')
      .replace(' or ', ' | ')
      .replace('array', 'Array<unknown>')
    paramsString += `  /* ${(literalDescription || description)
      .trimStart()
      .trimEnd()} */\n  ${name}${optionalSymbol}: ${parsedType};\n`
  }

  return paramsString
}

module.exports = {
  HelpParser,
  executeCommand,
  parseParameters,
}
