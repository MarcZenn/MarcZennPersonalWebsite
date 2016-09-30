// React Router sets up Routing for a react application. It lets one mimic url changes for a single page app i.e. if you have an About page then ...com/about will return the About Component.

// Components
import React from 'react';

import {Router, Route, IndexRoute, hashHistory} from 'react-router'; // 'hashHistory' is whatever the user types in the browser after the domain.
import App from '../resources/src/App.jsx';
import Homepage from '../resources/Components/Home/Homepage.jsx';
import Notfound from '../resources/Components/ErrorPages/404.jsx';


export default (
  <Router path='/' component={App}>
    <IndexRoute component={Homepage}/>
    <Route path='*' component={Notfound}/>
  </Router>
);
