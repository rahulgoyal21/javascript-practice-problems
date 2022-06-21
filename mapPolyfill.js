const arr = [3, 5, 6, 9]

const circle = (radius) => {
  return parseFloat((Math.PI * radius * radius).toFixed(2))
}

const diameter = (radius) => {
  return radius * 2
}

const circumference = (radius) => {
  return parseFloat((2 * Math.PI * radius).toFixed(2))
}

// const area = (arr, method) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(method(arr[i]))
//   }
//   return result
// }

Array.prototype.calculate = function (method) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    result.push(method(this[i]))
  }
  return result
}

console.log(arr.calculate(circle))
console.log(arr.calculate(diameter))
console.log(arr.calculate(circumference))
