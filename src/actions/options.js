export const addOption = option => ({
  type: 'ADD_OPTION',
  option,
});

export const removeOption = option => ({
  type: 'REMOVE_OPTION',
  option,
});

export const removeAll = () => ({
  type: 'REMOVE_ALL',
});
