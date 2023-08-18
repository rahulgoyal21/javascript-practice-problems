const isPalindrome = (x) => {
  //121
  return x < 0 ? false : x === +x.toString().split('').reverse().join('');
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));
