const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

resize();

window.addEventListener("resize", resize);

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;
}

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

function drawGrid() {
  const size = 50;

  ctx.strokeStyle = "#cfe7b3";
  ctx.lineWidth = 1;

  for (let x = 0; x < canvas.width; x += size) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y < canvas.height; y += size) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

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

  drawGrid();
  drawPlayer();
}

function update() {
  updateClock();
}

function loop() {
  update();
  draw();

  requestAnimationFrame(loop);
}

player.x = 120;
player.y = 120;

loop();
