const palindrome = (sampleString) => {
  const sampleStringlength = [...new Set(sampleString)].filter((item) => item !== ' ').length;
  console.log(
    [...new Set(sampleString)].filter((item) => item !== ' '),
    [...new Set(sampleString)].filter((item) => item !== ' ').length,
    sampleString.split(' ').join(''),
    Math.floor(sampleString.split(' ').join('').length / 2) + 1
  );
  const finalStringLength =
    sampleString.split(' ').join('').length % 2 === 0
      ? sampleString.split(' ').join('').length / 2
      : Math.floor(sampleString.split(' ').join('').length / 2) + 1;
  console.log('Final String Length', finalStringLength);
  if (sampleStringlength === finalStringLength) console.log('Yes');
  else console.log('No');
};

function palindrome2(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  console.log('🚀 ~ palindrome2 ~ str:', str);
  console.log(str);
  return str === str.split('').reverse().join('');
}

//palindrome("was it a cat i saw") //fails as it contains multiple character more than 2 times
//palindrome("step on no pets")
// console.log(palindrome('was it a cat i saw'))
palindrome('my gym');
