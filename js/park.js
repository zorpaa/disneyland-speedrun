// ====================
// Park Rules
// ====================

const park = {

  openTime: 8 * 60,

  closeTime: 24 * 60,


  isOpen() {

    return player.time < this.closeTime;

  },


  remainingTime() {

    return this.closeTime - player.time;

  }

};



function checkParkStatus() {


  if (
    player.time >= park.closeTime &&
    !checkWin()
  ) {

    gameOver();

  }

}



function checkWin() {

  return (
    player.completed.length ===
    Object.keys(rides).length
  );

}



function gameOver() {

  alert(
    "Park Closed!\n\n" +
    "Rides Completed: " +
    player.completed.length +
    "/" +
    Object.keys(rides).length
  );


}



function victory() {

  alert(
    "DISNEYLAND SPEEDRUN COMPLETE!\n\n" +
    "Finished at: " +
    formatTime(player.time)
  );


}
