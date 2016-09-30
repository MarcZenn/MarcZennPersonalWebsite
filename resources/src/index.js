import React from 'react';

// Import the react dom which we will use to render our React Component into the DOM. Make sure react-dom is installed in package.json.
import ReactDOM from 'react-dom';

// Routes/Routing
import {Router, Route, IndexRoute} from 'react-router';
import routes from '../../app/routes.js';

// Initialize React Google Analytics - Output additional feedback to console via debug: true.
var ReactGA = require('react-ga');
ReactGA.initialize('UA-84944356-1', {
  debug: true,
});

// React Google Analytics - Log Page View
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

// Components
import App from './App.jsx'; // Import the outermost Parent Component.



// Tell the React virtual DOM where to mount the App Component.
ReactDOM.render(
  <Router routes={routes} onUpdate={logPageView} />,
  document.getElementById('root')
)
