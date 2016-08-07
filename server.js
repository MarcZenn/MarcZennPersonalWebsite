/*----------------------------------------------------------------------------
                  SMALL FRONT-END DEV ENV SERVER INSTANCE
                  - using ES5 syntax for extension .js-
--------------------------------------------------------------------------------*/

var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(process.env.PORT || 8080, 'localhost', function(err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('listening at port 8080');
});
