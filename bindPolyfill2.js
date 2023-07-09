const obj = {
  name: 'Rahul'
}

function getName(...args) {
  console.log(this.name, ...args)
}

Function.prototype.bindPolyfill = function (...args) {
  const ref = this
  const params = args.slice(1)
  return function (...args1) {
    ref.apply(args[0], [...params, ...args1])
  }
}

const methodRef = getName.bindPolyfill(obj, 'Goyal')
methodRef('Bhiwani')
