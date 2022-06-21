console.log('54')
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

const promise2 = new Promise((resolve, reject) => {
  console.log(3)
  resolve()
  console.log(4)
})

Promise.all([promise1, promise2])
  .then(() => console.log(6))
  .catch((err) => console.log(err))
