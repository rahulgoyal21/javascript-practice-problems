const palindrome = (sampleString)=>{
    const sampleStringlength = [...new Set(sampleString)].filter(item => item!== " ").length
    console.log([...new Set(sampleString)].filter(item => item!== " "),[...new Set(sampleString)].filter(item => item!== " ").length,sampleString.split(" ").join(""),Math.floor(sampleString.split(" ").join("").length/2) + 1)
    const finalStringLength = sampleString.split(" ").join("").length % 2 === 0 ? sampleString.split(" ").join("").length/2 : Math.floor(sampleString.split(" ").join("").length/2) + 1;
    console.log("Final String Length",finalStringLength)
    if(sampleStringlength === finalStringLength) console.log("Yes") 
    else console.log("No")
}

//palindrome("was it a cat i saw") //fails as it contains multiple character more than 2 times
//palindrome("step on no pets")
//palindrome("top spot")
palindrome("my gym")