// setTimeOut allows you to execute a statement once after an interval
//clearTimeOut() method clears a timer set with setTimeOut()
//clearinterva() method clears a timer set with setInterval()
//setInterval() allows you to execute statements repetedlly after an interval
 let id = 0;
 let sec = 0;
 let iid = 0;
function printmsg(){
    document.getElementById("op").innerHTML = "5 minites have passed";
};
// printmsg()
function start(){
    id = window.setTimeout(printmsg, 5000);
}
function stop(){
    window.clearTimeout(id)
}
// console.log(oop);
const intervalHandler = () => {
     document.getElementById("oop").innerHTML = `${sec} seconds`;
     sec++;
}
const timeHandler = () => {
   iid = window.setInterval(intervalHandler, 1000);
}
const clearHandler = () => {
    window.clearInterval(iid)
    // console.log(id);
};
let secs = 0;
let mins = 0;
let hrs = 0;
let day = 0;
let clear = 0;
const timeUpdate = () => {
    document.getElementById("seconds").innerHTML = `${secs} s`;
    document.getElementById("minutes").innerHTML = `${mins} m`;
    document.getElementById("hours").innerHTML = `${hrs} h`;
    document.getElementById("days").innerHTML = `${day} d`;
    secs++;
    condTime()
};
const condTime = () => {
    if (secs === 60) {
         secs = 0
         mins++;
        console.log(secs);
    }
     else if(mins === 60){
         mins = 0
         hrs++;
    } 
    else if(hrs === 24){
        hrs = 0
        day++;
    }
};
const timeIntUpdate = () => {
    clear = window.setInterval(timeUpdate, 1000);
};
const clearIt = () => {
    window.clearInterval(clear);
};