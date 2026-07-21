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
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawConnections();
  drawNodes();
  drawPlayer();
}

function loop(){
  update();
  draw();
  requestAnimationFrame(loop);
}

window.onload=startGame;
