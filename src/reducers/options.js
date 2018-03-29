const optionsReducerDefaultState = [];

const optionsReducer = (state = optionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [...state, action.option];
    case 'REMOVE_OPTION':
      return state.filter(option => option !== action.option);
    case 'REMOVE_ALL':
      return [];
    default:
      return state;
  }
};

export default optionsReducer;
