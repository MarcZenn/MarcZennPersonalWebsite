/*----------------------------------------------------------------------------
         A Node development server with Webpack bundling capabilities.

                  - using ES6 syntax for extension .js-
--------------------------------------------------------------------------------*/
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const devEnv = process.env.NODE_ENV !== 'production';
const port = devEnv ? 8080 : process.env.PORT;


const app = express();

// Check environment and dictate app behavior accordingly. Environment set in package.json scripts (if env is NOT production use webpack.production.config).
if(process.env.NODE_ENV !== 'production') {

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: false,
    historyApiFallback: true,
    stats: {
      colors: true
    },
  }));
  app.use(webpackHotMiddleware(compiler));

}


app.use(express.static(path.join(__dirname)));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html')
});


app.listen(port, 'localhost', function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
