function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a; // returned
  };
}

console.log(sum(1)(2)(3)(4)());
