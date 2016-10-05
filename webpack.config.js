const autoprefixer = require('autoprefixer')

module.exports = {
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
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  postcss: function () {
    return [ autoprefixer ]
  }
}
