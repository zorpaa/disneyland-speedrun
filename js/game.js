// ====================
// Game Setup
// ====================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

resize();

window.addEventListener("resize", resize);


// ====================
// Canvas
// ====================

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;
}


// ====================
// Time System
// ====================

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const suffix = hours >= 12 ? "PM" : "AM";

  let display = hours % 12;

  if (display === 0) {
    display = 12;
  }

  return `${display}:${String(mins).padStart(2, "0")} ${suffix}`;
}


function updateClock() {
  document.getElementById("clock").innerText =
    formatTime(player.time);
}


// ====================
// Rendering
// ====================

function drawPlayer() {
  ctx.beginPath();

  ctx.arc(
    player.x,
    player.y,
    12,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = "#ff4444";
  ctx.fill();
}


function draw() {
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  drawParkMap();
  drawPlayer();
}


// ====================
// Game Loop
// ====================

function update() {

  player.update();

  updateClock();

}


function loop() {
  update();
  draw();

  requestAnimationFrame(loop);
}


// ====================
// Start Game
// ====================

player.x =
nodes[player.currentNode].x;

player.y =
nodes[player.currentNode].y;


updateRideCounter();

loop();
