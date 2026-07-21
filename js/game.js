function resize(){
  canvas.width=900;
  canvas.height=600;
}

window.addEventListener("resize",resize);

function formatTime(minutes){
  let h=Math.floor(minutes/60),m=minutes%60;
  let s=h>=12?"PM":"AM";
  h%=12;
  if(h===0)h=12;
  return `${h}:${String(m).padStart(2,"0")} ${s}`;
}

function updateClock(){
  let c=document.getElementById("clock");
  if(c)c.innerText=formatTime(parkTime.current);
}

function startGame(){
  resize();
  startPark();

  player.x=nodes[player.currentNode].x;
  player.y=nodes[player.currentNode].y;

  updateClock();
  updateRideCounter();
  loop();
  checkNodeCollisions();
}

function update(){
  player.update();
  updateClock();
  updateHUD();
  checkParkStatus();
}

function draw(){
  drawParkMap();
}

function loop(){
  update();
  draw();
  requestAnimationFrame(loop);
}

window.onload=startGame;
