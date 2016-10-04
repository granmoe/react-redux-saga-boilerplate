module.exports = { // eslint-disable-line
  devtool: 'eval-source-map',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
