/*----------------------------------------------------------------------------
                  - using ES5 syntax for extension .js-
--------------------------------------------------------------------------------*/





const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');


new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: false
}).listen(process.env.PORT || 8080, function(err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('listening at port 8080');
});
