//    1
//   2 3
//  4 5 6
// 7 8 9 10

let count = 1
let str
for (let i = 0; i < 4; i++) {
  str = ''
  for (let j = 0; j < 4 - (i + 1); j++) {
    str += ' '
  }
  for (let c = 0; c <= i; c++) {
    str += count + ' '
    count++
  }
  console.log(str)
}
