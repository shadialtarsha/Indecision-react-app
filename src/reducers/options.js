import getOptions from '../utils/getOptions';
import setOptions from '../utils/setOptions';

const optionsReducerDefaultState = getOptions() || [];

const optionsReducer = (state = optionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_OPTION': {
      const newState = [...state, action.option];
      setOptions(newState);
      return newState;
    }
    case 'REMOVE_OPTION': {
      const newState = state.filter(option => option !== action.option);
      setOptions(newState);
      return newState;
    }
    case 'REMOVE_ALL': {
      setOptions([]);
      return [];
    }
    default:
      return state;
  }
};

export default optionsReducer;
