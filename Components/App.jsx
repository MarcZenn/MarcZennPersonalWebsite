import React, {Component} from 'react';

import Homepage from './Home/Home.jsx';

class App extends Component {
  render(){
    return (
    <Homepage />
    )
  }
}

export default App


/* ----------------------------------------------------------------------------
  - Run this command in terminal to hotload assets via react-hot-loader instead of
  just webpack-dev-server.

  ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot

  - If you prefer to use just webpack and webpack-dev-server alone then you can run
  this command in the terminal.

  webpack-dev-server --hotload --inline
-------------------------------------------------------------------------------- */
