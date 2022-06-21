// let array = [0,1,1,0,0,0,1,1,1,0,1,0,0];

// function sort(arr){

//     const sortedArray = [];
//     let lptr = 0;
//     let rptr = arr.length - 1;

//     arr.forEach((item) => {
//         debugger
//         if(item === 0)
//         sortedArray[lptr++] = item;
//         else
//         sortedArray[rptr--] = item;
//     })

//     return sortedArray;

// }
// console.log(sort(array))

// let array = [0,1,1,0,0,0,1,1,1,0,1,0,0];
// const sortedArray = []
// function sortUsingSetTimeout(arr){
//     arr.forEach((item) => {
//         setTimeout(() => sortedArray.push(item),item)
//     })
//     return sortedArray
// }

// console.log(sortUsingSetTimeout(array))

function bubbleSort(array) {
  let done = false
  while (!done) {
    done = true
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false
        let tmp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = tmp
      }
    }
  }

  return array
}

let numbers = [12, 10, 15, 25, 29, 100, 12, 11, 14, 13, 16]
bubbleSort(numbers)
console.log(numbers)
