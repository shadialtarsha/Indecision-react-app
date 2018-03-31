import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import optionsReducer from '../reducers/options';
import selectedOptionReducer from '../reducers/selectedOption';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      options: optionsReducer,
      selectedOption: selectedOptionReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
