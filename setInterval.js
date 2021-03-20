

function createSetIntervalPolyfill(){
   
    //closure
    let intervalId = 0;
    let intervalMap = {};


    function setIntervalPolyfill(callbackFn,delay = 0, ...args){
        
        //Unique
        let id = intervalId++;

        if(typeof callbackFn !== 'function')
            throw new TypeError("'callback' must be a func type")
        
        function repeat(){
            console.log("id",id)
            intervalMap[id] = setTimeout(()=>{
                callbackFn(...args)
                //Terminating condition
                if(intervalMap[id]){
                    console.log("In IF")
                    repeat()
                }
            },delay)
            console.log("id after",id)
        }
        repeat()
        return id;
    }

    function clearIntervalPolyfill(intervalId){
        console.log("...in clearIntervalPolyfill...",intervalId)
        clearTimeout(intervalMap[intervalId]);
        delete intervalMap[intervalId];
    }

return {setIntervalPolyfill,clearIntervalPolyfill}

}

const {setIntervalPolyfill,clearIntervalPolyfill} = createSetIntervalPolyfill()

let count = 0;
let intervalId;

function greet(name){
    console.log("greet function",intervalId)
    count++;
    console.log("Hello " + name )
    if(count >= 3)
    clearIntervalPolyfill(intervalId)
}

intervalId = setIntervalPolyfill(greet,1000,"Rahul")