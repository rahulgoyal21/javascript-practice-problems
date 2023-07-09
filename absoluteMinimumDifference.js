const arr = [20, 30, 11, 1, 15, 16, 14, 9, 93]
function calDifference(arr) {
  //sorting
  const sortedArray = arr.sort((a, b) => a - b)

  //storing difference of two consecutive numbers
  const diffObj = {}
  for (let i = 0; i < sortedArray.length - 1; i++) {
    diffObj[i + 1] = sortedArray[i + 1] - sortedArray[i]
  }

  //finding minimum difference value
  const minDiff = Math.min(...Object.values(diffObj))

  let pair = []
  for (let [key, value] of Object.entries(diffObj)) {
    if (value === minDiff) {
      pair.push([sortedArray[key - 1], sortedArray[key]])
    }
  }
  console.log(pair)
}

calDifference(arr)
