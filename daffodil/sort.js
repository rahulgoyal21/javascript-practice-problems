let array = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1]

// function ascendingSort(array){
//     let sortedArray = array.sort((num1,num2) => num1 > num2 ? 1 : -1 );
//     console.log("Sorted Array",sortedArray);
// }

// ascendingSort(array)

function ascendingSort(array, n) {
  let obj = {}

  for (let i = 0; i < n; i++) {
    if (obj[array[i]]) obj[array[i]]++
    else obj[array[i]] = 1
  }

  console.log(obj)
  let sortedArray = []
  let properties = Object.keys(obj)

  for (let i = 0; i < obj[properties[0]]; i++) sortedArray.push(0)
  for (let i = 0; i < obj[properties[1]]; i++) sortedArray.push(1)

  console.log(sortedArray)
}
let lengthCount = array.length
ascendingSort(array, lengthCount)
