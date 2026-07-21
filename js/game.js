// Main Game Loop

function startGame(){
  startPark();
  updateClock();
  updateRideCounter();
  loop();
}

function update(){
  player.update();
}

function draw(){
  console.log("drawing");
  drawParkMap();
}

function loop(){
  update();
  draw();
  requestAnimationFrame(loop);
}

window.onload=startGame;
