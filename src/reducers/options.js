const optionsReducerDefaultState = [];

const optionsReducer = (state = optionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [...state, action.option];
    case 'REMOVE_OPTION':
      return state.filter(option => option.id !== action.id);
    case 'REMOVE_ALL':
      return [];
    case 'SET_OPTIONS':
      return action.options;
    default:
      return state;
  }
};

export default optionsReducer;
