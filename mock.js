// const abc = () => {
//   const result = fetch('https://www.google.com/').then(() => {
//     console.log('then')
//   })
//   console.log(1)
// }
// abc()
// console.log(2)
// //1
// //2
// //then

// [1,7,11].map(parseInt)
// Ans - [1, NaN, 3]
// https://medium.com/dailyjs/parseint-mystery-7c4368ef7b21

// let i
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i)
//   }
//   setTimeout(log, 0)
// } // 3 3 3

// In JavaScript, which of the following data types is conditionally accepted by the async module?

// let i = 0
// setTimeout(() => alert(i), 3000)
// let startTime = new Date().getTime()
// let endTime = startTime
// while (endTime <= startTime + 10000) {
//   endTime += 1000
// }

let me = {
  name: 'John Snow',
  inArrow: () => {
    console.log('My name is ' + this.name)
  },
  inRegular() {
    console.log('My name is ' + this.name)
  }
}
me.inArrow()
me.inRegular()
