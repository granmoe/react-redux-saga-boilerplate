/* global module, __dirname */
const Webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const DashboardPlugin = require('webpack-dashboard/plugin')
const path = require('path')

const IS_DEV = process.env.NODE_ENV === 'development'

const plugins = [
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
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
    plugins: [
      new Webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(path.join(
          __dirname,
          'src',
          'public',
          'vendor-manifest.json'
        ))
      })
    ] // add imagemin-mozjpeg plugin once https://github.com/sindresorhus/execa/issues/61 is available...and prob switch to image-webpack-loader
  })
]

if (IS_DEV) {
  plugins.push(
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new DashboardPlugin()
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
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  )
}

module.exports = {
  devtool: IS_DEV ? 'cheap-module-source-map' : 'eval',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src', 'public')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: false,
    contentBase: path.join(__dirname, 'src', 'public'),
    inline: true,
    hot: true,
    open: false,
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
