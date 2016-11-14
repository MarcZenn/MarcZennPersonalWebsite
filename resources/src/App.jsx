// TODO: plan out the rest of the site
// TODO: hookup contact form
// TODO: add form front-end vs. back-end? validation for contact form
// TODO: setup http secure protocol (HTTPS)
// TODO: find the right way to setup font awesome
// TODO: use cookies to not show upgrading UI component if they've already visited that page OR toggle entire websites CSS between the two....


// Import React Component
import React, {Component} from 'react';

// Front-end session data
import cookie from 'react-cookie';

// Google Fonts Package. - For new fonts add to array.
const WebFont = require('webfontloader');
 WebFont.load({
   google: {
     families: ['Raleway', 'Roboto Condensed', 'Bungee Hairline']
   }
 });

// Master Stylesheet
require('../assets/scss/app.scss');



// Outermost Parent Component
class App extends Component {
  // Set cookies on the front-end only. For Auth protected back-end routes use JWT Tokens...
  constructor() {
    super()
    // this.state =  { userRevisit: cookie.load('true') };
  }

  componentWillMount() {
    console.log(reactCookie.setRawCookie('setRawCookie'));
    // cookie.save('userRevisit', userRevisit, { path: '/'});
      // this.setState({userRevisitId});
      // var date = new Date();
      // var time = date.getTime();
      // time += 3600 * 1000;
      // date.setTime(time);
      // var exp = date.toGMTString();
      //
      // cookie.save('userRevisitId', userRevisitId, {
      //   path : '/',
      //    exp:date.toUTCString()
      //  })


      var ass = cookie.load('userRevisit');
      console.log(ass)
      console.log(cookie.userRevisit)
  }

  render(){
    return (
    <section className="main-body">
      {this.props.children}
    </section>
    )
  }
}

export default App
