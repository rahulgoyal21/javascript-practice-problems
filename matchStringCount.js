const a="rahul"
const b="gayal"

const matchingStringCount=(string1,string2)=>{
    const targetString=[...new Set(string1)];
    console.log("..targetString..",targetString)
    const sourceString=[...new Set(string2)];
    console.log("..sourceString..",sourceString)
    return targetString.filter(item => sourceString.includes(item) ).length
}

console.log("...matchingStringCount....",matchingStringCount(a,b))



