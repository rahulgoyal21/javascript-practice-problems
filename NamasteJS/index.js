
// function a(){
//     var b = 10;
//     return function c(){
//         console.log(b);
//     }
// }

// let z = a();
// z();


function a(){
    var b = 10;
    setTimeout(function (){
        console.log(b);
    },3000);
}
 a();   

