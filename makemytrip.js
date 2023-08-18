function recursion(obj, item) {
  if (obj[item]) return obj[item]
  else return obj[item] ?? undefined
}

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
  let x = obj
  let splitted = str.split('.') // [a,b,c];
  splitted.forEach((item) => {
    if (typeof x === 'object') {
      x = recursion(x, item)
    }
  })
  console.log(x)
}

isExist('a.b.c') //10
isExist('a.h') //20
isExist('a.b.d.h') //undefined
isExist('a.b.h') //undefined
isExist('a.h') //20
isExist('d') // 0
