const selectedOptionReducerDefaultState = null;

const selectedOptionReducer = (state = selectedOptionReducerDefaultState, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return action.option.text;
    case 'RESET_OPTION':
      return null;
    default:
      return state;
  }
};

export default selectedOptionReducer;
