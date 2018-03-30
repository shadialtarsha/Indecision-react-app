const getOptions = (key = 'options') => {
  try {
    const options = JSON.parse(localStorage.getItem(key));
    if (options) {
      return options;
    }
  } catch (e) {
    return [];
  }
};

export default getOptions;
