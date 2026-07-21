// ====================
// UI System
// ====================


const canvas =
  document.getElementById("gameCanvas");


const ctx =
  canvas.getContext("2d");



// ====================
// Draw Everything
// ====================


function drawParkMap() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );
  ctx.fillStyle="blue";
  ctx.fillRect(10,10,50,50);

  drawConnections();

  drawNodes();

  drawPlayer();

}



// ====================
// Draw Connections
// ====================


function drawConnections() {


  ctx.strokeStyle = "#888";

  ctx.lineWidth = 3;



  for (const id in nodes) {


    const node = nodes[id];


    if (!node.connections) {
      continue;
    }



    for (const connection of node.connections) {


      const target =
        nodes[connection.node];



      if (!target) {

        console.error(
          "Missing connection target:",
          connection.node
        );

        continue;

      }



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



// ====================
// Draw Nodes
// ====================


function drawNodes() {


  for (const id in nodes) {


    const node =
      nodes[id];


    ctx.beginPath();


    ctx.arc(
      node.x,
      node.y,
      20,
      0,
      Math.PI * 2
    );


    if (node.type === "ride") {

      ctx.fillStyle = "#ffcc00";

    }

    else {

      ctx.fillStyle = "#4caf50";

    }


    ctx.fill();



    ctx.fillStyle = "black";

    ctx.font =
      "12px Arial";


    ctx.fillText(
      node.name,
      node.x - 30,
      node.y - 25
    );


  }

}



// ====================
// Draw Player
// ====================


function drawPlayer() {


  ctx.beginPath();


  ctx.arc(
    player.x,
    player.y,
    10,
    0,
    Math.PI * 2
  );


  ctx.fillStyle =
    "red";


  ctx.fill();

}



// ====================
// Mouse Controls
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


    const node =
      nodes[id];



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



// ====================
// Node Selection
// ====================


function selectNode(id) {


  console.log(
    "Selected node:",
    id
  );



  if (player.moving) {

    console.log(
      "Player currently moving"
    );

    return;

  }



  const route =
    findPath(
      player.currentNode,
      id
    );



  console.log(
    "Route:",
    route
  );



  if (!route || !route.path) {


    console.error(
      "No valid route"
    );


    return;

  }



  player.destination =
    id;



  player.startMovement(
    route.path
  );
}
