const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, item) => acc + item, 0);

console.log('sum without polyfill', sum);

const sum1 = (...args) => {
  console.log('sum1 args', args);
  let [acc, item, index, array] = args;
  acc = acc + item;
  return acc;
};

Array.prototype.myReduce1 = function (...args) {
  const callback = args[0];
  const arr = this;
  let acc = args[1] || args[0];
  if (arr === undefined || arr === null || !arr.length) throw new TypeError('Array is not valid');
  if (callback === undefined || callback === null || typeof callback !== 'function') {
    throw new TypeError('callback is not valid');
  }
  for (let i = !arr[1] ? 1 : 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
};
console.log('sum is', arr.myReduce1(sum1, 1));
Array.prototype.myReduce = function (...args) {
  const callback = args[0];
  const arr = this;
  /**
   * condition for if acc is passed, otherwise first element of array is taken as acc
   */
  let acc = args[1] || arr[0];
  if (arr === undefined || arr === null || !arr.length) throw new TypeError('Array is not valid');
  if (typeof callback !== 'function' || callback === undefined) throw new TypeError('Callback is not valid ');
  console.log(args, this, acc);
  for (let i = !args[1] ? 1 : 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
};

console.log('sum with polyfill', arr.myReduce(sum1, 9));
