const num  = 123351

function splitTheDigits(num){
    const numArray = []
    
    //storing the no in an array
    while(num > 0){
        numArray.push(num % 10)
        num = Math.trunc(num / 10);
    }
    console.log("numArray",numArray)

    let lptr = 0,rptr = numArray.length - 1;

    while(lptr < rptr || lptr === rptr){
        console.log("....",lptr,rptr)
        if(numArray[lptr] === numArray[rptr]){
            if(lptr === rptr || rptr-lptr === 1){
                return "Palindrome"
            }
            lptr++;
            rptr--;
        }else 
            return "Not Palindrome"
    }
}


console.log(splitTheDigits(num))
