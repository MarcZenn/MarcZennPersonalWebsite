// import React
import React from 'react';

// React Router sets up Routing for a react application. It lets one mimic url changes for a single page app i.e. if you have an About page then '...com/about' will return the About Component.
import {Router, Route, IndexRoute, hashHistory} from 'react-router'; // 'hashHistory' is whatever the user types in the browser after the domain.
import App from '../resources/src/App.jsx';
import Homepage from '../resources/Components/Home/Homepage.jsx';
import PageNotFound from '../resources/Components/ErrorPages/404.jsx';
import Companies from '../resources/Components/Companies/Index.jsx';
import About from '../resources/Components/About/Index.jsx';
import Works from '../resources/Components/Work/Index.jsx';
import Contact from '../resources/Components/Work/Index.jsx';



export default (
  <Router path='/' component={App}>
    <IndexRoute component={Homepage}/>
    <Route path='/companies' component={Companies} />
    <Route path='/about' component={About}/>
    <Route path='/works' component={Works}/>
    <Route path='/contact' component={Contact}/>

    {/* error/maintenance pages */}
    <Route path='/*' component={PageNotFound}/>
  </Router>
);
