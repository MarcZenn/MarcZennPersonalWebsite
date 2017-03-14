// TODO: hookup contact form with mailgun API.
// TODO: add form front-end validation for contact form
// TODO: setup express/node server API routes
// TODO: finish resume landing page
// TODO: setup http secure protocol (HTTPS) in Node


// Import React Component
import React, {Component} from 'react';

// Front-end session data
import cookie from 'react-cookie';

// Google Fonts Package. - For new fonts add to array.
const WebFont = require('webfontloader');
 WebFont.load({
   google: {
     families: ['Raleway', 'Roboto Condensed', 'Bungee Hairline', 'Poppins']
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
    // TODO:: Decide whether or not to utilize this.
    // console.log(reactCookie.setRawCookie('setRawCookie'));
    // cookie.save('userRevisit', userRevisit, { path: '/'});
    //   this.setState({userRevisitId});
    //   var date = new Date();
    //   var time = date.getTime();
    //   time += 3600 * 1000;
    //   date.setTime(time);
    //   var exp = date.toGMTString();
    //
    //   cookie.save('userRevisitId', userRevisitId, {
    //     path : '/',
    //      exp:date.toUTCString()
    //    })
    //
    //
    //   var ass = cookie.load('userRevisit');
    //   console.log(ass)
    //   console.log(cookie.userRevisit)
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
