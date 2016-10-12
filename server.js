/*----------------------------------------------------------------------------
         A Node development server with Webpack bundling capabilities.

                  - using ES6 syntax for extension .js-
--------------------------------------------------------------------------------*/

const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);


// Setup server paths
app.use(express.static(__dirname + '/../')); // Serve from root directory
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080);
