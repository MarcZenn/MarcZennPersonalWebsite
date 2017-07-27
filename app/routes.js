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
import Work from '../resources/Components/Work/Work.jsx';
import Contact from '../resources/Containers/Contact.jsx';
import PrivacyPolicy from '../resources/Components/Static/PrivacyPolicy.jsx';
import Personal from '../resources/Components/Personal/Personal.jsx';
import Professional from '../resources/Components/Professional/Professional.jsx';
import Details from '../resources/Components/Details/Details.jsx';


export default (
  <Router history={browserHistory} path='/' component={App}>

    {/* Portfolio Routes */}
    <Route component={Portfolio}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact}/>
        <Route path='/companies' component={Companies} />
        <Route path='/work' component={Work}/>
        <Route path='/privacy-policy' component={PrivacyPolicy}/>
        <Route path='/personal-projects' component={Personal}/>
        <Route path='/professional-contributions' component={Professional} />
        <Route path="/project-details/:type/:project" component={Details} />
    </Route>



    {/* error/maintenance pages */}
    <Route path='/*' component={PageNotFound}/>
  </Router>
);
