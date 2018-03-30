const setOptions = (key = 'options', options) => {
  localStorage.setItem(key, JSON.stringify(options));
};

export default setOptions;
