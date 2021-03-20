// let sum = function (a){
// console.log(arguments.length,arguments.callee)
// if(typeof a !== 'undefined'){
//     return function(b){
//         if(typeof b !== 'undefined'){
//             return sum(a+b);
//         }else return a;
//     }  
// } 
//  else return 0;
// }

// console.log(sum())
// console.log(sum(1))
// console.log(sum(1)(2)(3))
// console.log(sum(1)(2)(3)())
//console.log(sum()(2)(3)(3)()(1))



//amazon interview question
// let sum = function(a){
//     return function(b){
//         if(typeof b !== 'undefined')
//             return sum(a+b);
//         else return a;    
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)())



// let sum = function(a){
//     let addNext = function(b){
//         return sum(b);
//     }

//     addNext.valueOf = function(){
//         return n;
//     }

//     return addNext;
// }


//console.log(add(1)(2)(3)(4)(5))