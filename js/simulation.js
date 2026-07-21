// Ride Simulation

function startRide(rideID){

  let ride=rides[rideID];

  if(!ride){
    console.error("Missing ride:",rideID);
    return;
  }


  if(ride.completed){
    return;
  }


  addMinutes(ride.wait);


  addMinutes(ride.duration);


  ride.completed=true;

  player.completed.push(rideID);


  updateRideCounter();


  if(parkIsClosed()){
    console.log("Ride finished after closing");
  }

}


// Check ride completion

function allRidesComplete(){

  for(let id in rides){

    if(!rides[id].completed){
      return false;
    }

  }

  return true;

}


// Park status
function checkParkStatus(){

  if(parkIsClosed()){

    alert("Park is closed!");

    return false;

  }

  return true;

}
