// Ex. 14/4 = 3,2

function calRemQuo(num1,num2){
    //num1 = 14, num2 = 4
    let quotient = num1;
    let remainder = num1;
    let count=0;
    while(remainder >= num2){
        quotient = quotient - num2;
        console.log("q",quotient,remainder)
        remainder = quotient    
        count++;
    }
    console.log("Quotient and remainders are",count,quotient)
}
calRemQuo(100,10)