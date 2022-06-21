let input = 14;

function findFinger(input){
    let arr = ["first","second","third","fourth","fifth"]
    if(input < 1) return undefined;
    else if(input === 5)
        return arr[input - 1]
    else if(input >=1 && input <= 5)
        return arr[input - 1];
    else{
        input = input - 5;
        let count = 1;
        while(input > 0){
            if(input <= 4){
                if(count % 2 === 0)
                    return arr[input];
                else return arr[arr.length - input - 1];    
            }
            count++;
            input = input - 4;
        }     
    }

}
console.log(findFinger(14))