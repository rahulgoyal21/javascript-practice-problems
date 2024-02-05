function getSetIntervalPolyfill() {
  let intervalId = 0;

  /**
   * * Used for storing the session info for various instances
   * * just acts like hashing
   */
  let intervalMap = {};

  function customSetInterval(callbackfn, delay, ...args) {
    // a new id will be generated for each new instance
    let id = intervalId++;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callbackfn(...args);
        if (intervalMap[id])
          // it will repeatedly call the repeat() func unless intervalMap id is there
          return repeat(); //
      }, delay);
    }

    repeat();

    return id;
  }

  function customClearInterval(intervalId) {
    clearTimeout(intervalMap[intervalId]);
    delete intervalMap[intervalId];
  }

  return { customClearInterval, customSetInterval };
}

const { customClearInterval, customSetInterval } = getSetIntervalPolyfill();

let count = 1;
let intervalId;
function greeting(name) {
  console.log('hello', name, count);
  count++;
  if (count > 4) customClearInterval(intervalId);
}

intervalId = customSetInterval(greeting, 1000, 'Rahul');
