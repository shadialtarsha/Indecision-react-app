const getOptions = () => {
  try {
    const options = JSON.parse(localStorage.getItem('options'));
    if (options) {
      return options;
    }
  } catch (e) {
    console.log(e);
  }
};

export default getOptions;
