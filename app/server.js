/*----------------------------------------------------------------------------
         A Node development server with Webpack bundling capabilities.

                            - using ES6 syntax -

/* ----------------------------------------------------------------------------
                      SERVE ASSETS LOCALLY W/ WEBPACK

  Run the command below in your terminal to hotload and serve assets.

  $ npm start

-------------------------------------------------------------------------------- */
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 9090;

// Allow cross-origin requests. This is mainly for Chrome. CORS can also be enabled for a single route only. - For example
/*
 * app.get('/products/:id', cors(), function(req, res, next){
 *  res.json({msg: 'This is CORS-enabled for a Single Route'});
 * });
 *
 * To learn more visit - https://www.npmjs.com/package/cors
*/
const cors = require('cors');

const app = express();

// Configure CORS so as to remove the error: "A wildcard '*' cannot be used in the 'Access-Control-Allow-Origin' header when the credentials flag is set to true."
/*
 *
 It seems that when you make a request that can change something (POST, PUT, etc), CORS rules require that the browser makes a preflight request (OPTIONS) before making the actual request. In Node, you have to specifically handle these OPTION requests and set 'Access-Control-Allow-Origin' to true manually. (can also do this per ajax call). You need to add handling for preflight OPTION requests
*/
// const corsOptions = {
//   origin: 'http://localhost:9090/sockjs-node/info',
// }

app.use(cors());

// Check environment and dictate app behavior accordingly. If the environment is production use webpack.production.config (see postinstall script in package.json) and dont run webpack dev server.
if(process.env.NODE_ENV !== 'production') {

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: false,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9090");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(webpackHotMiddleware(compiler));
}

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:9090");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(bodyParser.json({type: '*/*', limit: '50mb'})); // Parse requests to JSON
app.use(express.static(path.join(__dirname + '/../'))); // Serve from root directory

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', './index.html'))
});


app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
