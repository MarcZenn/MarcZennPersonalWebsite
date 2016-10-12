/*----------------------------------------------------------------------------
         A Node development server with Webpack bundling capabilities.

                  - using ES6 syntax for extension .js-
--------------------------------------------------------------------------------*/

// const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');


const devEnv = process.env.NODE_ENV !== 'production';
const app = express();



// Check environment and dictate app behavior accordingly. Environment set in package.json scripts (if env is NOT production use webpack.production.config).
if(devEnv) {

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

} else {

  app.use(express.static(__dirname));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname));
  });

  app.listen(devEnv ? 8080 : process.env.PORT, function onStart(err) {
    if (err) {
      console.log(err);
    }
    console.log('listening at port' + process.env.PORT);
  });
}
