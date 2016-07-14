// Export a configuration object
module.exports = {
  // First property references the entry file. Then specify the output file.
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  // tell webpack to take .jsx file and pass them to Bable for transpiling. The way you do this is
  // with loaders. Having devtools option as `source-map` generates the source map files which helps to debug on development.
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/, //RegEx that webpack uses to determine if .js/.jsx files should be transpiled.
        loaders: ['react-hot','babel'], // Loaders to be used. Must be installed. jsx??
        exclude: /node_modules/ // exclude node modules.
      },
      {
        test: /\.scss$/,
        loaders:['style', 'css?sourceMap', 'sass?sourceMap'] // utilizing source map options for css debugging in dev tools. Displays source file for given css selector or element.
      }
    ]
  }
}
