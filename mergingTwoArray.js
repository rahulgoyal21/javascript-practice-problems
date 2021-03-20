const arr1 = [2,6,9,12,14,17,21,25,30]
const arr2 = [3,7,10,20,22]

 function merging(arr1,arr2){
     const arr3 = []
     let p1 = p2 = 0;
     while(p1 < arr1.length && p2 < arr2.length){
         if(arr1[p1] < arr2[p2]){
             arr3.push(arr1[p1])
             p1++;
         }else if(arr1[p1] > arr2[p2]){
            arr3.push(arr2[p2])
            p2++;
        }else {
            arr3.push(arr1[p1])
            p1++;
            p2++;
        }
    }
    let = []
    console.log(p1,arr1.length,p2,arr2.length)
    if(p1 < arr1.length)
        sortedArray =  arr3.concat(arr1.slice(p1,arr1.length))
    else if(p2 < arr2.length)
        sortedArray = arr3.concat(arr2.slice(p2,arr2.length)) 
    return sortedArray       
 }

 console.log(merging(arr1,arr2))