// Dynamic Wait Time System
function getCrowdLevel(){
  let t=parkTime.current;
  // 8:00 - 10:00 buildup
  if(t<600){
    return (t-480)/120*0.35;
  }
  // 10:00 - 12:00
  if(t<720){
    return 0.35+(t-600)/120*0.30;
  }
  // 12:00 - 2:00
  if(t<840){
    return 0.65+(t-720)/120*0.20;
  }
  // 2:00 - 5:00 peak
  if(t<1020){
    return 0.85;
  }
  // 5:00 - 7:00 decline
  if(t<1140){
    return 0.85-(t-1020)/120*0.20;
  }
  // 7:00 - 9:00
  if(t<1260){
    return 0.65-(t-1140)/120*0.20;
  }
  // Closing hours
  return 0.45;
}
function calculateWait(ride){
  let crowd=getCrowdLevel();
  let wait =
    ride.maxWait *
    crowd *
    ride.popularity;
  // Random variation
  let variation =
    Math.floor(Math.random()*7)-3;
  wait+=variation;
  // Apply limits
  wait=Math.min(
    wait,
    ride.maxWait
  );
  return Math.max(
    0,
    Math.round(wait)
  );
}
function updateRideWaits(){
  for(let id in rides){
    let ride=rides[id];
    if(!ride.completed){
      let wait=calculateWait(ride);
      wait*=crowdMultiplier;
      ride.currentWait=
        Math.round(wait);
    }
  }
}
