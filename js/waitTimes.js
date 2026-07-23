// Dynamic Wait Time System
function getCrowdLevel(){
  let t=parkTime.current;
  // Rope drop
  if(t<540)
    return 0;
  // 9-10 AM buildup
  if(t<600)
    return 0.25;
  // 10-12
  if(t<720)
    return 0.55;
  // 12-2
  if(t<840)
    return 0.80;
  // 2-5 peak
  if(t<1020)
    return 1;
  // 5-7
  if(t<1140)
    return 0.85;
  // 7-9
  if(t<1260)
    return 0.65;
  // close
  return 0.35;
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
