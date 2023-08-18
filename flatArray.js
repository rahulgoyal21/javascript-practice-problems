// let arr = [1, 2, [3, [4]], [7, 8, 9], [10, 11, [12, 13, [14, 15, [16]]], 18]]

// function flat(arr) {
//   const flatArray = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       const newArr = acc.concat(item)
//       acc = [...newArr]
//     } else acc.push(item)
//     return acc
//   }, [])

//   if (flatArray.some((item) => Array.isArray(item))) return flat(flatArray)
//   else return flatArray
// }

// console.log(flat(arr))

let arr = [5, 10, [15, 20, [25]], [30]]
// Output: [5, 10, 15, 20, 25, 30]
let flatArray = []
function flat(arr) {
  arr.forEach((item) => {
    if (!Array.isArray(item)) {
      flatArray = [...flatArray, item]
    } else if (Array.isArray(item)) {
      flat(item)
    } else return
  })
}
flat(arr)
console.log('....flatArray.....', flatArray)
