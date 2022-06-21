const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50]

const chunking = (arr, n) => {
  const chunkedArray = []
  for (let i = 0; i < arr.length; i += n) {
    chunkedArray.push(arr.slice(i, i + n))
  }
  return chunkedArray
}

console.log(chunking(arr, 5))

const [list, chunkSize] = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 6]

const chunked = [...Array(Math.ceil(list.length / chunkSize))].map((_) => list.splice(0, chunkSize))
console.log(chunked)

// console.log([...Array(Math.ceil(list.length / chunkSize))].map((_) => list.splice(0, chunkSize)))
// console.log(list)
