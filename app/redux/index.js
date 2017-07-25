import { combineReducers } from 'redux';

import {
  AppReducer,
  UiReducer
} from './reducers/index.js';


/* Define Redux Store - Think of this as a global state store for our application.
 *
 * The rootReducer actually maps our reducers to a key effectively making data available
 * across the entire application. The key is the name for that particular piece of state.
 *
 *
*/
const rootReducer = combineReducers({
  app: AppReducer,
  ui: UiReducer,
});


export default rootReducer;
