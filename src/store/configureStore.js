import { createStore, combineReducers } from 'redux';
import optionsReducer from '../reducers/options';
import selectedOptionReducer from '../reducers/selectedOption';

export default () => {
  const store = createStore(
    combineReducers({
      options: optionsReducer,
      selectedOption: selectedOptionReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
