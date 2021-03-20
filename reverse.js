let str = "I love my India";   //"India my love I"

function reverse(str){
  let lptr = 0;
  let rptr = 0;
  const reversedString = [];
  for(let i=0;i < str.length;i++){
      if(str[i].charCodeAt(0) === 32){
        reversedString.push(str.slice(lptr,rptr))
        lptr = i+1;
        rptr= i+1;
      }else{
        rptr++;
        if(rptr === str.length){
          reversedString.push(str.slice(lptr,rptr))
        }
      }
  }
  return reversedString;
}

console.log(reverse(str))