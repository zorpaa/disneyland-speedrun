// Main Game Loop

function startGame(){
canvas.width=900;
canvas.height=600;
  
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
