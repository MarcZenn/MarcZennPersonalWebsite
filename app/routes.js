// import React
import React from 'react';

// React Router sets up Routing for a react application. It lets one mimic url changes for a single page app i.e. if you have an About page then '...com/about' will return the About Component.
import {Router, Route, IndexRoute, browserHistory} from 'react-router'; // 'browserHistory' is whatever the user types in the browser after the domain.
import App from '../resources/src/App.jsx';
import Homepage from '../resources/Components/Home/Homepage.jsx';
import PageNotFound from '../resources/Components/ErrorPages/404.jsx';
import Companies from '../resources/Components/Companies/Index.jsx';
import About from '../resources/Components/About/Index.jsx';
import Works from '../resources/Components/Work/WorkLanding.jsx';
import Contact from '../resources/Components/Contact/Index.jsx';
import PrivacyPolicy from '../resources/Components/Static/PrivacyPolicy.jsx';
import PersonalProjects from '../resources/Components/Work/PersonalProjects.jsx';
import ProfessionalContributions from '../resources/Components/Work/ProfessionalContributions.jsx';



export default (
  <Router path='/' history={browserHistory} component={App}>
    <IndexRoute component={Homepage}/>
    <Route path='/companies' component={Companies} />
    <Route path='/about' component={About}/>
    <Route path='/works' component={Works}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/privacy-policy' component={PrivacyPolicy}/>
    <Route path='/personal-projects' component={PersonalProjects}/>
    <Route path='/professional-contributions' component={ProfessionalContributions}/>

    {/* error/maintenance pages */}
    <Route path='/*' component={PageNotFound}/>
  </Router>
);
