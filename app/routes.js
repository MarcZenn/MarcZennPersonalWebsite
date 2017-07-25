// Libs
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Containers
import App from '../resources/Containers/App/app.container.jsx';
import Portfolio from '../resources/Containers/Portfolio/portfolio.container.jsx';


// Components
import Home from '../resources/Components/Home/Home.jsx';
import PageNotFound from '../resources/Components/ErrorPages/404.jsx';
import Companies from '../resources/Components/Companies/Companies.jsx';
import Works from '../resources/Components/Work/Works.jsx';
import Contact from '../resources/Containers/Contact.jsx';
import PrivacyPolicy from '../resources/Components/Static/PrivacyPolicy.jsx';
import Personal from '../resources/Components/Personal/Personal.jsx';
import Professional from '../resources/Components/Professional/Professional.jsx';


export default (
  <Router history={browserHistory} path='/' component={App}>

    {/* Portfolio Routes */}
    <Route component={Portfolio}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact}/>
        <Route path='/companies' component={Companies} />
        <Route path='/works' component={Works}/>
        <Route path='/privacy-policy' component={PrivacyPolicy}/>
        <Route path='/personal-projects' component={Personal}/>
        <Route path='/professional-contributions' component={Professional} />
    </Route>



    {/* error/maintenance pages */}
    <Route path='/*' component={PageNotFound}/>
  </Router>
);
