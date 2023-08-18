const arr = [2, 3, 10, 45, 24, 10100, 1987, -9, 10000]

// const secondLargest = (arr) => {
//   const distinct = [...new Set(arr)]
//   const maxNumber = Math.max(...distinct)
//   const filtered = distinct.filter((item) => item < maxNumber)
//   const second = Math.max(...filtered)
//   return second
// }
// console.log(secondLargest(arr))

function secondLargest(arr) {
  let max1st = arr[0]

  let max2nd = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1st) {
      max2nd = max1st
      max1st = arr[i]
    } else if (arr[i] > max2nd && arr[i] !== max1st) {
      max2nd = arr[i]
    }
  }

  return max2nd
}

console.log(secondLargest([2, 4, 54, 27, 98, 99]))
