
function anagram(str1,str2){
    const a=[...str1]
    const b=[...str2]
    const obj1={}
    const obj2={}
    a.forEach(item=>{
        if(obj1[item.charCodeAt(0)]){   //charCodeAt() for retreiving the char code of a alphabet
            obj1[item.charCodeAt(0)]++;
        }else{
            obj1[item.charCodeAt(0)] = 1;
        }
    })
    b.forEach(item=>{
        if(obj2[item.charCodeAt(0)]){
            obj2[item.charCodeAt(0)]++;
        }else{
            obj2[item.charCodeAt(0)] = 1;
        }
    })
    
    if(Object.keys(obj1).length === Object.keys(obj2).length)
        return Object.keys(obj1).filter(item => obj1[item] === obj2[item]).length === Object.keys(obj2).length ? 'Anagram' : "Not Anagram"
    else
        return 'Not Anagram'
}

console.log(anagram('integral','triangle'))