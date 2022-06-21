let arr = [5, 10, [15, 20, [25]], [30]]

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
