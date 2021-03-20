let arr = [10,20,30,12,1,7,4,10,15]

function sort(arr){
    let sortedArr = [];
    // arr.map(item => {
    //     setTimeout(()=> sortedArr.push(item) ,item)
    //     console.log(sortedArr)
    // });
    for(let i = 0;i<arr.length;i++){
        setTimeout(()=> sortedArr.push(arr[i]) ,i)
        console.log(sortedArr)
    }
    return sortedArr;
}

console.log(sort(arr))