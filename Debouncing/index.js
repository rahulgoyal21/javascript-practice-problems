let count=1;
const apiCall=()=>{
    console.log("Function called..",count++);
}

const getData=(func,delay)=>{
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func()
        },delay)
    }
}
console.log("rahul")

const debouncing = getData(apiCall,500)
