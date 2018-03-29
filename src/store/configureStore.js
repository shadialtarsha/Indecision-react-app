import { createStore, combineReducers } from 'redux';
import optionsReducer from '../reducers/options';

export default () => {
  const store = createStore(
    combineReducers({
      options: optionsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
