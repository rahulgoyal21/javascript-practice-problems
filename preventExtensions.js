const obj = {
    b:1,
    c:2 
  };
  const obj2 = Object.preventExtensions(obj)
  console.log("preventExtensions",obj,obj2,obj===obj2)
  obj.a = 5;
  console.log("preventExtensions",obj)
  delete obj.b
  console.log("preventExtensions",obj)
  obj.c = 10
  console.log("preventExtensions",obj)