function sum(...a) {
  if (a.length !== 0) {
    let sumA = 0
    for (let i = 0; i < a.length; i++) sumA += parseInt(a[i])
    return function (...b) {
      let sumB = 0
      if (b.length !== 0) {
        for (let i = 0; i < b.length; i++) sumB += parseInt(b[i])
        return sum(parseInt(sumA) + parseInt(sumB))
      } else return parseInt(...a)
    }
  } else return 0
}

console.log(sum(4, 4, 5)(2)(3, 4, 5)())
console.log(sum(1)(2)(3)())
