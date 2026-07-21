// ====================
// Ride Simulation
// ====================

function advanceTime(minutes) {
  player.time += minutes;
}


// ====================
// Complete Ride
// ====================

function completeRide(rideId) {
  const ride = rides[rideId];

  if (!ride) {
    return;
  }

  if (ride.completed) {
    return;
  }


  advanceTime(ride.wait);
  advanceTime(ride.duration);

  ride.completed = true;

  player.completed.push(rideId);


  updateRideCounter();


  console.log(
    `${ride.name} completed!`
  );
}


// ====================
// Ride Counter
// ====================

function updateRideCounter() {
  const total = Object.keys(rides).length;

  const completed =
    player.completed.length;


  document.getElementById("rides").innerText =
    `Rides: ${completed} / ${total}`;
}
