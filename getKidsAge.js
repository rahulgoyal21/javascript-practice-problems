const profile = {
    name:'peter',
    age:56,
    kids:[{
        name:'rahul',
        age:23,
        kids:[
        {
            name:"goyal",
            age:1,
            kids:[{
                name:"goyal",
                age:18
            }]
        },
        {
         name:'phil',
         age:2
        }
        ]
    }]
}
let total=0;
function getAge(obj){
    total += obj.age
    if(obj.kids && obj.kids.length){
        for(let i=0;i<obj.kids.length;i++){
            console.log("obj kids",obj.kids[i])
            getAge(obj.kids[i])
        }
    }
    return total
}

console.log(getAge(profile))