import React from 'react';

// Import the react dom which we will use to render our React Component into the DOM. Make sure react-dom is installed in package.json.
import ReactDOM from 'react-dom';

// Import the App Component.
import App from './App.jsx';


// Tell the React virtual DOM where to mount the App Component.
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
