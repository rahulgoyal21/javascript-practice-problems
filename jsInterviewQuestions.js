function test() {
  console.log(a)
  console.log(b)

  var a = 10
  let b = 20
}
==========


function test() {
  console.log('1')
  delay(1000)
  console.log('2')
}
//write delay function
===========



var b = 10
function test() {
  console.log(b)
  b++
  console.log(b)
  var b = 3
  console.log(b)
}
test()
==========


function test() {
  var b = 3
}
test()
console.log(b)
============


function test(num) {}

test(7)
  .then(() => console.log('Resolved'))
  .catch(() => console.log('Rejected'))
=============



(function() {
    console.log(1);

    setTimeout(function(){console.log(2)}, 1000); 

    var prom = new Promise((res) => res(5));
    prom.then((v) => {
     console.log(v);
    });

    setTimeout(function(){console.log(3)}, 0); 

    console.log(4);
})();

===========


function describe(color1, color2) {
  console.log(
    `Car Maker is ${this.make} and model is ${this.model} and colors are ${color1} and ${color2}`
  );
}

let car = {
    make: "maruti",
    model: "Tata SUV"
};


============

var employee = {
  name: 'Joe',
  getName: function (){
      return this.name;
  }
};

var getEmployeeName = employee.getName;
console.log(getEmployeeName());
console.log(employee.getName());

============

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

==============

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


==========

function isExist(str) {
  let obj = {
    a: {
      b: {
        c: 10
      },
      h: 20
    },
    d: 0
  }
}

isExist('a.b.c') //10
isExist('a.h') //20
isExist('a.b.d.h') //undefined

============

console.log('54')
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

const promise2 = new Promise((resolve, reject) => {
  console.log(3)
  reject()
  console.log(4)
})

Promise.all([promise1, promise2])
  .then(() => console.log(6))
  .catch((err) => console.log(err))









































































































































=============
var price = 50;

function changePrice(){
	console.log('Price is:', price);
  var price = 40;
  console.log('Price is:', price);
}

============

const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});


==========
var x = 5;
console.log(x);
if (false) {
var x = 6;
console.log(x);
}
console.log(x);

============

/* Given array: [4, 2, 6, 3, 1]. Write a function that iterate through the array and print the values.
Thing to take care is, there should be delay in seconds before each print as much of the value */
Output:
// delay 4 seconds
4
// delay 2 seconds
2
.
.
.
// Delay 1 second
1

==========

const circle = {
  radius: 20,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(circle.diameter());
console.log(circle.perimeter());