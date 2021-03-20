let array = [0,1,1,0,0,0,1,1,1,0,1,0,0];

function sort(arr){

    const sortedArray = [];
    let lptr = 0;
    let rptr = arr.length - 1;

    arr.forEach((item) => {
        debugger
        if(item === 0)
        sortedArray[lptr++] = item;
        else
        sortedArray[rptr--] = item;  
    })

    return sortedArray;

}
console.log(sort(array))


// let array = [0,1,1,0,0,0,1,1,1,0,1,0,0];
// const sortedArray = []
// function sortUsingSetTimeout(arr){
//     arr.forEach((item) => {
//         setTimeout(() => sortedArray.push(item),item)
//     })
//     return sortedArray
// }

// console.log(sortUsingSetTimeout(array))


