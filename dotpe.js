// var b = 1
// function outer() {
//   console.log(b) // undefined
//   var b = 2
//   function inner() {
//     console.log(b) //undefined
//     b++
//     console.log(b++) //NaN
//     var b = 3
//     console.log(b) // 3
//   }
//   inner()
// }
// outer()

;(function () {
  try {
    throw new Error()
  } catch (x) {
    var x = 1
    var y = 2
    console.log(x) //1
  }
  console.log(x) //Reference Error undefined
  console.log(y) // Reference ERROR 2
})()

// Function debounce(delay){
// Let timer;
// Return function(e){
// 	if(timer){
// 	clearTimeout(timer);
// 	}

// 	timer = setTimeout(()=> APIcall(), delay);
// }
// }

// Const debounceHandler = debounce(1000);
