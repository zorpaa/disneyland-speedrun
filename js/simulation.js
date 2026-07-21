// Simulation System

function advanceTime(minutes){
  parkTime.current+=minutes;
  updateClock();
}

function arriveAtDestination(){

  if(!player.destination)return;

  const destination=player.destination;

  console.log("Arrived:",nodes[destination].name);

  player.currentNode=destination;

  if(nodes[destination].type==="ride"){
    completeRide(destination);
  }

  player.destination=null;
  player.path=[];
  player.pathIndex=0;
  player.moving=false;
}


function completeRide(id){

  const ride=rides[id];

  if(!ride||ride.completed)return;

  if(parkIsClosed()){
    console.log("Entered queue before closing.");
  }

  advanceTime(ride.wait);
  advanceTime(ride.duration);

  ride.completed=true;

  player.completed.push(id);

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
