// Webpack is required here in order to call its DefinePlugin() method which detects the environment.
var path = require('path');
var webpack = require('webpack');

// Exported but not sure where this is being imported?
module.exports = {
  // First property references the entry file. Then specifies the output file.
  entry: [
    './resources/src/index', // actual entry point.
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // Tell webpack to take .jsx file and pass them to Bable for transpiling. The way you do this is with loaders. Having devtools option as `source-map` generates the source map files which helps to debug on development. You can simply tack on more loaders as needed like the SASS loader below.
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
        test: /\.jsx?$/, // RegEx that webpack uses to determine if .js/.jsx files should be transpiled.
        loaders: ['react-hot','babel'], // Loaders to be used. Must be installed.
        exclude: /node_modules/ // exclude node modules.
      },
      {
      test: /.woff$|.woff2$|.ttf$|.eot$|.svg$/,
      loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.css$/, loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
