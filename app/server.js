/*----------------------------------------------------------------------------
         A Node development server with Webpack bundling capabilities.

                  - using ES6 syntax for extension .js-
--------------------------------------------------------------------------------*/
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;


const app = express();

// Check environment and dictate app behavior accordingly. Environment set in package.json scripts (if env is NOT production use webpack.production.config).
if(process.env.NODE_ENV !== 'production') {

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('../webpack.config');
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

app.use(bodyParser.json({type: '*/*', limit: '50mb'})); // Parse requests to JSON
app.use(express.static(path.join(__dirname + '/../'))); // Serve from root directory

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./index.html'))
});


app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
