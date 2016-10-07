// TODO: plan out the rest of the site
// TODO: give credit to original designer somewhere.
// TODO: hookup contact form
// TODO: add form validation for contact form
// TODO: setup http secure protocol (HTTPS)
// TODO: setup ads on the site.



// Components
import React, {Component} from 'react';


// Stylesheets
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
