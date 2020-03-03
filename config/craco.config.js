const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')
const { getWebpackAliases } = require('./aliases')

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin
    }
  ],
  babel: {
    plugins: ['@babel/plugin-proposal-export-default-from']
  },
  devServer: {
    open: false
  },
  webpack: {
    alias: getWebpackAliases(),
    plugins: []
  }
}
