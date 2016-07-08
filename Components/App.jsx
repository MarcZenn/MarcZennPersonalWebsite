import React, {Component} from 'react';

// Components
import Homepage from './Home/Home.jsx';

// Stylesheets
require('../public/styles/app.scss');


class App extends Component {
  render(){
    return (
    <Homepage />
    )
  }
}

export default App


/* ----------------------------------------------------------------------------
                  WEPBACK SERVE ASSETS LIVE FOR DEVELOPMENT

  - Run this command in terminal to hotload assets via react-hot-loader instead of
  just webpack-dev-server.

  ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot

  - If you prefer to use just webpack and webpack-dev-server alone then you can run
  this command in the terminal.

  webpack-dev-server --hotload --inline
-------------------------------------------------------------------------------- */
