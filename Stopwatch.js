function Stopwatch(){
    let startTime,endTime,running,duration=0
    this.start = function(){
        if(running){
            throw new Error("Already running")
        }

        running = true;
        startTime = new Date()
    }
    this.stop = function(){
        if(!running){
            throw new Error("Not started yet")
        }
        running = false
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration = seconds
    }
    this.reset = function(){
        startTime =  null
        endTime = null
        running = false
        duration = 0
    } 
    //For implementing Abstraction so that user can only see it but can't be modified
    Object.defineProperty(this,'duration',{                 
        get : function(){
            return duration
        }
    })
}
console.log("rahul")
const timer = new Stopwatch();
