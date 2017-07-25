// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// Dependencies
import 'bootstrap/dist/css/bootstrap.css';

// Routes/Routing
import {Router, Route, IndexRoute} from 'react-router';
import routes from '../../app/routes.js';

// Reducer Imports
import reducers from '../.././app/redux';

// Initialize React Google Analytics
var ReactGA = require('react-ga');
ReactGA.initialize('UA-84944356-1', {
  debug: true,
});

// Google Analytics - Log Page View
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

// Outermost Parent Component
import App from '.././Containers/App/app.container.jsx';


const store = createStore(reducers);



// Tell the React virtual DOM where to mount the App Component and also include react-router routes. Notice the onUpdate method...without this when visiting a new page, the previous pages window position will be stored and you will land at that same scroll position upon visiting the new page (could be at the bottom or middle of the page)....Hate that this is necessary. Will try to find a cleaner fix asap.
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} onUpdate={() => window.scrollTo(0, 0)}  />
  </Provider>, document.getElementById('root')
);
