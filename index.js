Array.prototype.customFilter = function (callback, obj) {
  const filteredArr = [];
  const context = obj || this;
  for (let i = 0; i < this.length; i++) {
    const current = callback.call(context, this[i], i, this);
    if (current) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

function createDebounceFunction(func, timeout) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
