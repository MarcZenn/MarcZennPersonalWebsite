module.exports = {
    entry: './index.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jpg$/i,
          exclude: /node_modules/,
          loaders: ['react-native-image']
        }
      ]
    }

}
