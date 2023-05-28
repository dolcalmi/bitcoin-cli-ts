const { words } = require('./words')

function toCamelCase(word) {
  let matchedSuffix = ''
  for (let i = 0; i < words.length; i++) {
    const suffix = words[i]
    if (word.endsWith(suffix) && suffix.length > matchedSuffix.length) {
      matchedSuffix = suffix
    }
  }

  if (matchedSuffix) {
    const remaining = word.slice(0, -matchedSuffix.length)
    let camelized =
      matchedSuffix.charAt(0).toUpperCase() + matchedSuffix.slice(1)

    if (remaining.length > 0) {
      const camelizedRemaining = toCamelCase(remaining)
      camelized = camelizedRemaining + camelized
    }

    return camelized.charAt(0).toLowerCase() + camelized.slice(1)
  }

  return word
}

module.exports = toCamelCase
