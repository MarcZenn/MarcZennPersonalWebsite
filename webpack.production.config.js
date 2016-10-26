// Webpack is required here in order to call its HotModuleReplacementPlugin() method which is synonmous to the --hot command when initiating webpack-dev-server --inline in terminal.
var path = require('path');
var webpack = require('webpack');

// Exported but not sure where this is being imported?
module.exports = {
  // First property references the entry file. Then specifies the output file as well as configuration for webpack hot reload of assets.
  entry: [
    './resources/src/index', // actual entry point.
  ],
  output: {
    path: __dirname,
    publicPath: 'http://0.0.0.0:' + process.env.PORT,
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
        test: /\.jsx?$/, //RegEx that webpack uses to determine if .js/.jsx files should be transpiled.
        loaders: ['react-hot','babel'], // Loaders to be used. Must be installed.
        exclude: /node_modules/ // exclude node modules.
      },
      {
        test: /\.(eot|woff|png|jpg|gif)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.scss$/,
        loaders:['style', 'css?sourceMap', 'sass?sourceMap'], // utilizing source map options for css debugging in dev tools. Displays source file for given css selector or element.
        include: path.join(__dirname),
        // To load ONLY the scss files you specify use syntax below or someting similar. Not sure what syntax should be just yet.
        // include: [
        //   path.join(__dirname, '/resources/assets/scss'),
        //   path.join(__dirname, '/public/stylesheets/scss')
        // ]
        resolve: {
          alias: {
            images: path.join(__dirname, 'public/images')
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
