// Dynamic Wait Time System

function getCrowdLevel(){
  let t=parkTime.current;

  if(t<540)return 0.05;      // 8:00-9:00
  if(t<600)return 0.25;      // 9:00-10:00
  if(t<720)return 0.60;      // 10:00-12:00
  if(t<840)return 0.90;      // 12:00-2:00
  if(t<1020)return 1.00;     // 2:00-5:00
  if(t<1140)return 0.80;     // 5:00-7:00
  if(t<1260)return 0.55;     // 7:00-9:00
  return 0.20;               // 9:00-close
}

function calculateWait(ride){
  let crowd=getCrowdLevel();
  let wait=
    ride.maxWait*
    crowd*
    ride.popularity;
  let variation=Math.floor(Math.random()*5)-2;
  wait+=variation;
  wait=Math.min(wait,ride.maxWait);
  return Math.max(0,Math.round(wait));
}

function updateRideWaits(){
  for(let id in rides){
    let ride=rides[id];
    if(!ride.completed){
      let wait=calculateWait(ride);
      wait*=crowdMultiplier;
      ride.currentWait=Math.round(wait);
    }
  }
}
