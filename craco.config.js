const path = require(`path`)
const CracoEsbuildPlugin = require(`craco-esbuild`)

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        includePaths: [path.resolve(__dirname, 'node_modules')]
      }
    }
  ],
  webpack: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    symlinks: false,
    alias: {
      'styled-components': path.resolve(
        __dirname,
        'node_modules/styled-components'
      ),
      react: path.resolve(__dirname, 'node_modules/react')
    }
  }
}
