const path = require('path')

const aliases = [
  ['components', 'src/components'],
  ['config', 'src/config'],
  ['store', 'src/store'],
  ['styles', 'src/styles']
]

const getWebpackAliases = () => {
  const editedAliases = aliases.reduce((accumulator, [alias, aliasPath]) => {
    return {
      ...accumulator,
      [`~${alias}`]: path.resolve(`${__dirname}/..`, `${aliasPath}/`)
    }
  }, {})

  return editedAliases
}

const getEslintAliases = () => {
  const editedAliases = aliases.map(([alias, aliasPath]) => [`~${alias}`, `./${aliasPath}/`])

  return editedAliases
}

module.exports = {
  getWebpackAliases,
  getEslintAliases
}
