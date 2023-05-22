const { words } = require('./words')

function toCamelCase(word) {
  for (let i = 0; i < words.length; i++) {
    const prefix = words[i]
    if (word.startsWith(prefix)) {
      const remaining = word.slice(prefix.length)
      let camelized = prefix.charAt(0).toLowerCase() + prefix.slice(1)

      if (remaining.length > 0) {
        const camelizedRemaining = toCamelCase(remaining)
        if (
          camelizedRemaining.charAt(0) ===
          camelizedRemaining.charAt(0).toUpperCase()
        ) {
          camelized += camelizedRemaining
        } else {
          camelized +=
            camelizedRemaining.charAt(0).toUpperCase() +
            camelizedRemaining.slice(1)
        }
      }

      return camelized
    }
  }

  return word
}

module.exports = toCamelCase
