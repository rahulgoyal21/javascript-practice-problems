function maxSequence(str) {
  let count = 1,
    freq = {}
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++
    else {
      if (freq[str[i]]) {
        freq[str[i]] = freq[str[i]] > count ? freq[str[i]] : count
      } else {
        freq[str[i]] = count
        count = 1
      }
    }
  }
  console.log(freq)

  const max = Math.max(...Object.values(freq))
  const output = Object.keys(freq).reduce((acc, key) => {
    if (freq[key] === max) {
      acc[key] = max
      return acc
    } else return acc
  }, {})

  return output
}

console.log(maxSequence('aaaccccccccbbbbbbddddccccccc'))
