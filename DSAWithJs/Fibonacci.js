const Fibonacci = (n) => {
  let x = 0;
  if (n <= 1) return console.log(x);
  let y = 1;
  let inc = 1;
  let temp;
  let str = `${x} ${y}`;
  while (inc <= n - 1) {
    temp = x;
    x = y;
    y = y + temp;
    // str = `${str} ${y}`;
    str = y;
    inc++;
  }
  return console.log(str);
};

Fibonacci(9);

//Optimized
const fib = (n) => {
  const arr = [0, 1];
  if (n <= 1) console.log(n);
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr[n]);
};

fib(8);
