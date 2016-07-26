// small dev server
// import webpack from 'webpack' as webpack;
var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// import 'webpack-dev-server' as WebPackDevServer;
// import './webpack.config' as config;


new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function(err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('listening at port 8080');
});
