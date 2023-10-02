import rootReducer from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(logger)
        // other store enhancers if any
    )
);
export default store;