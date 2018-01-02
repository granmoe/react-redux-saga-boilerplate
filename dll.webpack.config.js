const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    vendor: [
      'prop-types',
      'react',
      'react-dom',
      'react-json-tree',
      'react-redux',
      'redux',
      'redux-devtools-extension',
      'redux-little-router',
      'redux-saga',
      'redux-saga-tester',
      'styled-components',
      'whatwg-fetch'
    ]
  },
  output: {
    filename: 'vendor.bundle.js',
    path: path.join(__dirname, 'src', 'public'),
    library: 'vendor'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'src', 'public', 'vendor-manifest.json'),
      name: 'vendor'
    })
  ]
}
