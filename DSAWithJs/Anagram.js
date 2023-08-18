const Anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const filtered1 = [...new Set(str1)];
  const filtered2 = [...new Set(str2)];
  return filtered1.every((item) => filtered2.includes(item));
};

console.log(Anagram('observe', 'verbos'));
