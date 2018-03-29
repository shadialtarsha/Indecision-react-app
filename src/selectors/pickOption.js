const pickOption = options => {
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
};

export default pickOption;
