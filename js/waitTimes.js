// Dynamic Wait Time System
function getCrowdLevel(){
  let t=parkTime.current;
  // Rope drop surge: guests reach attractions
  if(t<500){
    return (t-480)/20*0.15;
  }
  // 8:20 - 10:00 morning buildup
  if(t<600){
    return 0.15+(t-500)/100*0.20;
  }
  // 10:00 - 12:00
  if(t<720){
    return 0.35+(t-600)/120*0.30;
  }
  // 12:00 - 2:00
  if(t<840){
    return 0.65+(t-720)/120*0.20;
  }
  // Afternoon peak
  if(t<1020){
    return 0.85;
  }
  // Evening decline
  if(t<1140){
    return 0.85-(t-1020)/120*0.20;
  }
  if(t<1260){
    return 0.65-(t-1140)/120*0.20;
  }
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
