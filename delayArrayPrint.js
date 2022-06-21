const arr = [4, 2, 6, 3, 1]

function printArrayValuesDelay(arr) {
  arr.forEach(async (item) => {
    await delayValue(item)
    // console.log(value)
    delayValue(item)
  })
}

function delayValue(delay) {
  return new Promise((resolved) => setTimeout(() => resolved(console.log(delay)), delay * 1000))
  //   return setTimeout(() => console.log(delay), delay)
}

printArrayValuesDelay(arr)
