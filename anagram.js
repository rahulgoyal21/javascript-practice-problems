function anagram(str1, str2) {
  const a = [...str1];
  const b = [...str2];
  const obj1 = {};
  const obj2 = {};
  a.forEach((item) => {
    if (obj1[item]) {
      //charCodeAt() for retreiving the char code of a alphabet
      obj1[item]++;
    } else {
      obj1[item] = 1;
    }
  });
  b.forEach((item) => {
    if (obj2[item]) {
      obj2[item]++;
    } else {
      obj2[item] = 1;
    }
  });
  console.log(obj1, obj2);
  if (str1.length === str2.length)
    return Object.keys(obj1).filter((item) => obj1[item] === obj2[item]).length === Object.keys(obj2).length
      ? 'Anagram'
      : 'Not Anagram';
  else return 'Not Anagram';
}

function anagram2(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();

  return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(anagram('observe', 'verbosee'));
