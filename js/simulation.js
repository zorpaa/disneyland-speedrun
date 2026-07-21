// ====================
// Simulation System
// ====================


function advanceTime(minutes) {

  player.time += minutes;

}



// ====================
// Arrival Handling
// ====================


function arriveAtDestination() {

  if (!player.destination) {
    return;
  }


  const destination =
    player.destination;


  console.log(
    "Arrived:",
    nodes[destination].name
  );


  player.currentNode = destination;


  if (nodes[destination].type === "ride") {

    completeRide(destination);

  }


  player.destination = null;

  player.path = [];

  player.pathIndex = 0;

  player.moving = false;

}


  const destination =
    player.destination;


  console.log(
    "Arrived:",
    nodes[destination].name
  );


  if (nodes[destination].type === "ride") {

    completeRide(destination);

  }


  player.destination = null;

}



// ====================
// Ride Completion
// ====================


function completeRide(id) {

  const ride = rides[id];


  if (!ride || ride.completed) {
    return;
  }



  // Queue entry happens now.
  // As long as this happens before closing,
  // the ride is allowed to finish.

  if (player.time >= park.closeTime) {

    console.log(
      "Park is closed."
    );

    return;

  }



  advanceTime(
    ride.wait
  );


  advanceTime(
    ride.duration
  );



  ride.completed = true;


  player.completed.push(id);



  updateRideCounter();



  console.log(
    ride.name + " completed!"
  );



  if (checkWin()) {

    victory();

  }

}



// ====================
// Ride Counter
// ====================


function updateRideCounter() {

  const total =
    Object.keys(rides).length;


  document.getElementById("rides").innerText =
    "Rides: " +
    player.completed.length +
    " / " +
    total;

}
