// this.name="rahul"
// const profile={
//     name:"goyal",
//     getName:()=>{
//         setTimeout(function(){
//             console.log("this",this.name)
//         },1000)
//     }
// }
 
// profile.getName()

// var list = document.getElementsByTagName("li");
// for(let i = 0;i<list.length;i++){
//     var listItem = list[i];
//     listItem.onclick = function(){
//         console.log(i)
//     }
// }

// function mul(x){
//     return function(y){
//         debugger
//         return {
//             result: x*y,
//             sum: function(z){
//                 return x*y+z;
//             }
//         }
//     }
// }

// console.log(mul(2)(3).result);
// console.log(mul(2)(3).sum(4));

// var salary = "10000";

// var x = {foo:1};

// var output = (function(){
//     delete x.foo;
//     return x.foo;

// })();
// console.log(output,x);

// MyClass = function(){
//     this.a = "hello";
//     this.b = "world";
// }
// debugger

// obj = new MyClass();

// MyClass.prototype.a = "Rahul";
// MyClass.prototype.b = 12;
// MyClass.prototype.c = 12;


// console.log(obj.a,obj.b,obj

const APiCall = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(()=> {return 5;})
    // .then((v) => {
    //     console.log("first",v);
    //     return 10;
    // })
    // .then((v) =>{
    //     throw 10;
    //     return 21;
    // })
    // .then((v) => console.log("second",v))
    // .catch((err) => console.log("error",err))
}

const a = () => {
    Promise.all([1,2,3].map(async v => {
       await APiCall();
       console.log(v);
    })).then((res)=>console.log("SUCCESS",res))
    console.log("Done")
}


// const a = async () => {
//     for(let v of [1,2,3]){
//        await APiCall();
//        console.log(v);
//     }
//     console.log("Done")
// }

a()
