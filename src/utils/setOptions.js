const setOptions = options => {
  localStorage.setItem('options', JSON.stringify(options));
};

export default setOptions;
