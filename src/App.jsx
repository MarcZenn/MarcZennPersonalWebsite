// TODO: plan out the rest of the site
// TODO: give credit to original designer somewhere.
// TODO: make mobile responsive w/ materialize or bootstrap
// TODO: 'upgrading UI' spinner before client display work page
// TODO: incorporate google analytics to track site hits.


import React, {Component} from 'react';


// Bootstrap Layouts
// import {Col, Row, Grid} from 'react-bootstrap/lib';


// Components
import Homepage from '../Components/Home/Home.jsx';

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

  npm start

-------------------------------------------------------------------------------- */
