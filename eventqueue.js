let eventQueue=[];
function addEvent(event){
    eventQueue.push(event);
    console.log("Event added:",event);
}
function processEvents(){
    while(eventQueue.length>0){
        let event=eventQueue.shift();
        console.log("processing event:",event);
    }
}
addEvent("login");
addEvent("downloadfile");
console.log("\n Processing events:");
processEvents();

