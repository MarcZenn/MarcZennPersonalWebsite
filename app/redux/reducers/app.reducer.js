// Action Type Import
import { APP_INIT } from '.././actions/app.actions';

/* A Reducer is a function that returns a single piece of application state.
 *
 * Here we listen for a dispatched action of type "FETCH_PRODUCTS" that will send
 * along our weedmaps JSON data. Once that event occurs this reducer will grab that
 * data and add it to a new instance of our global application state. React-Redux
 * will then make our updated state available to our react components.
 *
 *
*/
const defaultState = {
  app_init: false,
}


export const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case APP_INIT:
        console.log('app initialized');
        return Object.assign({}, state, {
            app_init: true
        });


    default:
      return state;
  }
  // return state
};
