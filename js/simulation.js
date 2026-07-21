// ====================
// Simulation System
// ====================

function advanceTime(minutes) {

  player.time += minutes;

}


// Called when player reaches destination

function arriveAtDestination() {

  if (!player.destination) {
    return;
  }


  const node =
    nodes[player.destination];


  console.log(
    "Arrived:",
    node.name
  );


  if (node.type === "ride") {

    completeRide(
      player.destination
    );

  }


  player.destination = null;

}



function completeRide(id) {

  const ride = rides[id];


  if (!ride || ride.completed) {
    return;
  }


  advanceTime(
    ride.wait +
    ride.duration
  );


  ride.completed = true;


  player.completed.push(id);


  updateRideCounter();


  console.log(
    ride.name,
    "completed"
  );

}



function updateRideCounter() {

  const total =
    Object.keys(rides).length;


  document.getElementById("rides").innerText =
    `Rides: ${player.completed.length} / ${total}`;

}
