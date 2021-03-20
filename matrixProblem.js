const matrix = [
  [1,1,2,3],
  [1,1,4,6],
  [1,1,2,9]
]

function sum(arr){
  return arr.reduce((x,y)=>x+y);
}
let rows = matrix.length
let columns = matrix[0].length

let rowFirst = matrix[0]
let rowLast = matrix[matrix.length - 1]

let rowFirstSum = sum(rowFirst)
console.log("rowFirstSum",rowFirstSum)
let rowLastSum = sum(rowLast)
console.log("rowLastSum",rowLastSum)


let colFirst = matrix.map((item)=>item[0])
let colLast = matrix.map(item => item[item.length - 1])

let colFirstSum = sum(colFirst)
console.log("colFirstSum",colFirstSum)
let colLastSum = sum(colLast)
console.log("colLastSum",colLastSum)

console.log(matrix[0][0],matrix[0][columns-1],matrix[rows-1][0],matrix[rows-1][columns-1])
const total = rowFirstSum + rowLastSum + colFirstSum + colLastSum - matrix[0][0] - matrix[0][columns-1] - matrix[rows-1][0]- matrix[rows-1][columns-1]

console.log("total",total)