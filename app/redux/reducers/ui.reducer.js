// Action Type Import
import { TERMINAL_MODE_ON } from '.././actions/ui.actions';
import { TERMINAL_MODE_OFF } from '.././actions/ui.actions';

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
  terminal_mode: false,
}


export const UiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TERMINAL_MODE_ON:
        return Object.assign({}, state, {
            terminal_mode: true
        });
    case TERMINAL_MODE_OFF:
        return Object.assign({}, state, {
            terminal_mode: false
        });


    default:
      return state;
  }
};
