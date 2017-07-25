// TODO: hookup contact form with mailgun API.
// TODO: add form front-end validation for contact form - local state
// TODO: setup express/node server API routes
// TODO: finish resume landing page
// TODO: setup http secure protocol (HTTPS) in Node


// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Dependencies
require('./app.container.scss');
import cookie from 'react-cookie';
import { initializeApp } from '../../.././app/redux/actions/app.actions.js';

// Google Fonts Package. - For new fonts add to array.
const WebFont = require('webfontloader');
 WebFont.load({
   google: {
     families: ['Raleway', 'Roboto Condensed', 'Bungee Hairline', 'Poppins', 'Inconsolata']
   }
 });



class App extends Component {
  // Set cookies on the front-end only. For Auth protected back-end routes use JWT Tokens...
  componentDidMount() {
    this.props.initializeApp();
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


/*
 * mapStateToProps is a helper function. It leverages React-Redux to connect our Redux global state
 * to our React views.
 *
 * More Specifically, the purpose of this function is to take our redux application state keys and
 * make them available to any smart components in need of it. Whatever key is returned from this
 * function will be available to us as a component prop.
 *
*/
const mapStateToProps = (state) => ({
  app_init: state.app.app_init,
})


/* mapDispatchToProps does exactly what it sounds like. It maps our redux actions to our props.
 *
 */
function mapDispatchToProps(dispatch) {
  return {
    initializeApp: bindActionCreators(initializeApp, dispatch)
  }
}


/* Here we are using a React-Redux connect function to bridge redux and react together.
 *
 * Specifically the connect function takes a function, a component and produces a container.
 * a component aware of the state contained by redux. - It also needs to know about any dispatch
 * methods, actions and make them available as props if needed.
*/
export default connect(mapStateToProps,  mapDispatchToProps)(App);
