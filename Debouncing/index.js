let count = 1;
const apiCall = () => {
  console.log('Function called..', count++);
};

const getData = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(args);
      func();
    }, delay);
  };
};

const debouncing = getData(apiCall, 2000);
debouncing('hello');

const throttle = (cb, d) => {
  let last;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};
