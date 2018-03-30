const localStorage = (function() {
  const store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value;
    },
  };
})();
global.localStorage = localStorage;
export default localStorage;
