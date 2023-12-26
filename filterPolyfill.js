const arr = [1, 2, 3, 4, 5, 6];

// const filteredContent = arr.filter((item) => item % 2 === 0) // [2,4,6];

function method(item) {
  return item % 2 === 0 ? true : false;
}

Array.prototype.filterPolyfill = function (arg) {
  console.log('🚀 ~ file: filterPolyfill.js:10 ~ arg:', arg);
  const ref = this;
  const array = [];
  for (let i = 0; i < ref.length; i++) {
    if (arg(ref[i])) array.push(ref[i]);
  }
  console.log(array);
};

arr.filterPolyfill(method);
