import React from 'react';

// Import the react dom which we will use to render our React Component into the DOM. Make sure react-dom is installed in package.json.
import ReactDOM from 'react-dom';

// Routes/Routing
import {Router, Route, IndexRoute} from 'react-router';
import routes from '../../app/routes.js';

// Components
import App from './App.jsx'; // Import the outermost Parent Component.



// Tell the React virtual DOM where to mount the App Component.
ReactDOM.render(
  // <App />,
  <Router routes={routes} />,
  document.getElementById('root')
)
