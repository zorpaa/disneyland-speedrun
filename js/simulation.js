// Simulation System

function advanceTime(minutes){
  if(isNaN(minutes))return;
  parkTime.current += minutes;
  updateQueue();
  updateRideWaits();
  updateClock();
}

function arriveAtDestination(){
  if(!player.destination)return;
  const destination=player.destination;
  console.log("Arrived:",nodes[destination].name);
  player.currentNode=destination;
  if(nodes[destination].type==="ride"){
    joinQueue(destination);
  }

  player.destination=null;
  player.path=[];
  player.pathIndex=0;
  player.moving=false;
}

function completeRide(id){
  const ride=rides[id];
  if(!ride||ride.completed)return;
  advanceTime(ride.duration);
  ride.completed=true;
  player.completed.push(id);
  player.state="idle";
  updateRideCounter();
  console.log(ride.name+" completed!");
  if(checkWin()){
    victory();
  }
}

function allRidesComplete(){
  for(let id in rides){
    if(!rides[id].completed)return false;
  }
  return true;
}


function checkParkStatus(){
  if(parkIsClosed()){
    alert("Park is closed!");
    return false;
  }
  return true;
}
function updateRideCounter(){
  const counter=document.getElementById("rides");
  if(!counter)return;
  counter.innerText=
    "Rides: "+
    player.completed.length+
    " / "+
    Object.keys(rides).length;
}
function checkWin(){
  return allRidesComplete();
}

function victory(){
  alert("Congratulations! You completed all rides!");
  
}
function updateHUD(){
  let loc=document.getElementById("location");
  let status=document.getElementById("status");
  if(loc)
    loc.innerText="Location: "+nodes[player.currentNode].name;
  if(status)
    status.innerText=parkIsClosed()?"Park Closed":"Park Open";
}
