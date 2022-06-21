const obj = {
  first: 'rahul',
  last: 'goyal'
}

function getName(city, state) {
  console.log(this.first + ' ' + this.last + ' ' + city + ' ' + state)
}

const getName1 = getName.bind(obj, 'Bhiwani')

getName1('Haryana')

Function.prototype.myBind = function (...args) {
  const obj = this // this contain the functin on which bind is applied
  const params = args.slice(1) //Will return new array without modifying existing one
  console.log(args)
  console.log(params)
  return function (...args1) {
    console.log(args1)
    obj.apply(args[0], [...params, ...args1])
  }
}

const getName2 = getName.myBind(obj, 'Bhiwani')
getName2('Haryana')
