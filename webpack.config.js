// Webpack is required here in order to call its HotModuleReplacementPlugin() method which is synonmous to the --hot command when initiating webpack-dev-server --inline in terminal.
var path = require('path');
var webpack = require('webpack');

module.exports = {
  // First property references the entry file. Then specifies the output file as well as configuration for webpack hot reload of assets.
  entry: [
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'webpack-dev-server/client?http://127.0.0.1:9090', // webpack-dev-server host and port. The 0.0.0.0 host lets the server listen for requests from the network not just localhost allowing for testing on multiple devices on the same network but breaks webpacks sockjs-node usage. Toggle depending on your needs
    './resources/src/index' // actual entry point.
  ],
  output: {
    path: __dirname,
    publicPath: 'http://127.0.0.1:9090',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // tell webpack to take .jsx file and pass them to Bable for transpiling. The way you do this is with loaders. Having devtools option as `source-map` generates the source map files which helps to debug on development. You can simple tack on more loaders as needed like the SASS loader below.
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders:['style', 'css?sourceMap', 'sass?sourceMap'], // utilizing source map options for css debugging in dev tools. Displays source file for given css selector or element.
        include: path.join(__dirname),
        resolve: {
          alias: {
            images: path.join(__dirname, 'public/images')
          }
        }
      },
      {
        test: /\.jsx?$/, //RegEx that webpack uses to determine if .js/.jsx files should be transpiled.
        loaders: ['react-hot','babel'], // Loaders to be used. Must be installed.
        exclude: /node_modules/ // exclude node modules.
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/, loader: 'style!css'
      },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
