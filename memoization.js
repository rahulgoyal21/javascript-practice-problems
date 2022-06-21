//1 1 2 3 5 8 13 21 34 55

function fib(n, memo) {
  console.log('IN fibonacci function', n, memo)
  if (memo[n]) {
    console.log('Entered in memoized version', n, memo)
    return memo[n]
  }
  if (n <= 1) {
    memo[n] = 1
    return 1
  }
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo))
}

function memoize(fib) {
  let cache = {}

  return (num) => {
    console.log('............cache..........', cache)
    if (cache[num] !== undefined) {
      console.log('In if block', num, cache[num])
      return cache[num]
    } else {
      let result = fib(num)
      cache[num] = result
      console.log('In else block', num, cache[num])
      return result
    }
  }
}

// console.log(memoize(fib)(7))
console.log(fib(7, {}))
