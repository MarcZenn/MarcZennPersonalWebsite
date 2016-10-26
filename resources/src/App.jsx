// TODO: plan out the rest of the site
// TODO: hookup contact form
// TODO: install react-redux
// TODO: install redux
// TODO: add form validation for contact form
// TODO: setup http secure protocol (HTTPS)
// TODO: find the right way to setup font awesome



// import React with sugar on top
import React, {Component} from 'react';

// Google Fonts
const WebFont = require('webfontloader');
 WebFont.load({
   google: {
     families: ['Raleway', 'Roboto Condensed']
   }
 });

// Master Stylesheet
require('../assets/scss/app.scss');



// React Render
class App extends Component {
  render(){
    return (
    <section className="main-body">
      {this.props.children}
    </section>
    )
  }
}

export default App


/* ----------------------------------------------------------------------------
                          WEPBACK SERVE ASSETS LOCALLY

  - Run this command in terminal to hotload assets via react-hot-loader instead of
  just webpack-dev-server.

  npm start

-------------------------------------------------------------------------------- */
