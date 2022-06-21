// const a = new Promise((resolve, reject) => {
//   resolve(2)
//   resolve(5)
//   console.log('here')
// })
// a.then((res) => console.log(res))

// function isEven(n) {
//   let even = true
//   for (let i = 1; i <= n; i++) even = !even
//   return even
// }
// isEven(10) ? console.log('Even') : console.log('Odd')

// const fun = function (val) {
//   console.log('value', value)
// }
// const fun = function (val1, val2) {
//   console.log(val1, val2)
// }
// fun(5)

// function doSome(x) {
//   console.log(x)
// }
// function doSome(x, y) {
//   console.log(x, y)
// }
// function doSome(x, y, z) {
//   console.log(x, y, z)
// }
// doSome(1)
// doSome(1, 2)
// doSome(1, 2, 3)

// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => {
//     throw new Error('My Error')
//   })
//   .catch(() => 1)
//   .then((x) => x + 1)
//   .then((x) => console.log(x))
//   .catch(console.error)

var arr = [1, 2, 3, 4]
arr[100] = 1234

for (let a in arr) console.log(a)

for (let a of arr) console.log(a)

arr.forEach((item) => console.log(item))
