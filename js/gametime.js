// Park Clock System

const parkTime={
  open:480,
  close:1440,
  current:480
};

function addMinutes(minutes){
  parkTime.current+=minutes;
  updateClock();
}

function getTimeString(){
  let hours=Math.floor(parkTime.current/60);
  let minutes=parkTime.current%60;
  let period=hours>=12?"PM":"AM";

  if(hours>12) hours-=12;
  if(hours===0) hours=12;

  return hours+":"+String(minutes).padStart(2,"0")+" "+period;
}

function parkIsClosed(){
  return parkTime.current>=parkTime.close;
}

function updateClock(){
  const clock=document.getElementById("clock");

  if(clock){
    clock.innerText=getTimeString();
  }
}
