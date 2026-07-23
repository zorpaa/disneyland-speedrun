// Park Clock System
console.log("GAME TIME LOADED");
const parkTime={
  open:480,
  close:1440,
  current:480
};
function addMinutes(minutes){
  if(isNaN(minutes))return;
  parkTime.current += minutes;
  updateQueue();
  updateRideWaits();
  updateClock();
}
function getTimeString(){
  let total=parkTime.current;
  let hours=Math.floor(total/60);
  let minutes=Math.floor(total%60);
  let seconds=Math.floor((total%1)*60);
  let period=hours>=12?"PM":"AM";
  if(hours>12)hours-=12;
  if(hours===0)hours=12;
  return (
    hours+
    ":"+
    String(minutes).padStart(2,"0")+
    ":"+
    String(seconds).padStart(2,"0")+
    " "+
    period
  );
}
function parkIsClosed(){
  return parkTime.current>=parkTime.close;
}
function updateClock(){
  console.log("NEW UPDATE CLOCK RUNNING");

  let clock=document.getElementById("clock");

  if(clock){
    clock.innerText=getTimeString();
  }
}
