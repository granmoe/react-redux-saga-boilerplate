/* global module, __dirname */
const Webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const IS_DEV = process.env.NODE_ENV === 'development'

const plugins = [
  new Webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': IS_DEV ? JSON.stringify('development') : JSON.stringify('production')
    }
  }),
  new ImageminPlugin({
    disable: true, // change to false to compress images even while webpack is in debug mode
    pngquant: {
      quality: '75-90'
    },
    gifsicle: {
      optimizationLevel: 1
    },
    svgo: {},
    plugins: [] // add imagemin-mozjpeg plugin once https://github.com/sindresorhus/execa/issues/61 is available...and prob switch to image-webpack-loader
  })
]

if (IS_DEV) {
  plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  )
} else {
  plugins.push(
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    })
  )
}

module.exports = {
  devtool: IS_DEV ? 'inline-source-map' : 'eval',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.less$/,
        loader: 'css-loader?sourceMap!less-loader?sourceMap'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: false,
    inline: true,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
}
