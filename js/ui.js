// ====================
// Map Rendering
// ====================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


function drawConnections() {

  ctx.strokeStyle = "#888";
  ctx.lineWidth = 3;


  for (const id in nodes) {

    const node = nodes[id];


    for (const connection of node.connections) {

      const target = nodes[connection.node];


      ctx.beginPath();

      ctx.moveTo(
        node.x,
        node.y
      );

      ctx.lineTo(
        target.x,
        target.y
      );

      ctx.stroke();

    }

  }

}



function drawNodes() {

  for (const id in nodes) {

    const node = nodes[id];


    let color = "#4caf50";


    if (node.type === "ride") {
      color = "#e91e63";
    }


    if (node.type === "junction") {
      color = "#2196f3";
    }


    ctx.beginPath();

    ctx.arc(
      node.x,
      node.y,
      18,
      0,
      Math.PI * 2
    );


    ctx.fillStyle = color;

    ctx.fill();


    ctx.fillStyle = "#000";

    ctx.font = "14px Arial";

    ctx.textAlign = "center";


    ctx.fillText(
      node.name,
      node.x,
      node.y - 25
    );

  }

}



function drawParkMap() {

  drawConnections();

  drawNodes();

}


// ====================
// Mouse Input
// ====================

canvas.addEventListener(
  "click",
  handleMapClick
);



function handleMapClick(event) {

  const rect =
    canvas.getBoundingClientRect();


  const mouseX =
    event.clientX - rect.left;

  const mouseY =
    event.clientY - rect.top;



  for (const id in nodes) {

    const node = nodes[id];


    const distance =
      Math.sqrt(
        (mouseX - node.x) ** 2 +
        (mouseY - node.y) ** 2
      );


    if (distance < 25) {

      selectNode(id);

      break;

    }

  }

}



function selectNode(id) {

  if (player.moving) {
    console.log("Currently walking");
    return;
  }


  if (player.destination) {
    console.log("Processing destination");
    return;
  }


  const route =
    findPath(
      player.currentNode,
      id
    );


  console.log(route);


  player.destination = id;

  console.log(
  "Starting route:",
  route.path
);

  player.startMovement(
    route.path
  );


  // Walking time based on graph distance

  advanceTime(
    route.distance
  );

}
