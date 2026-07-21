const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");

function drawParkMap(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawConnections();
  drawNodes();
  drawPlayer();
}

function drawConnections(){

  ctx.strokeStyle="#888";
  ctx.lineWidth=3;

  for(let id in nodes){

    let node=nodes[id];

    if(!node.connections)continue;

    for(let connection of node.connections){

      let target=nodes[connection.node];

      if(!target){
        console.error("Missing connection target:",connection.node);
        continue;
      }

      ctx.beginPath();
      ctx.moveTo(node.x,node.y);
      ctx.lineTo(target.x,target.y);
      ctx.stroke();
    }
  }
}

function drawNodes(){

  for(let id in nodes){

    let node=nodes[id];

    ctx.beginPath();
    ctx.arc(node.x,node.y,20,0,Math.PI*2);

    ctx.fillStyle=node.type==="ride"?"#ffcc00":"#4caf50";
    ctx.fill();

    ctx.fillStyle="black";
    ctx.font="12px Arial";
    ctx.fillText(node.name,node.x-30,node.y-25);
  }
}

function drawPlayer(){

  ctx.beginPath();
  ctx.arc(player.x,player.y,10,0,Math.PI*2);

  ctx.fillStyle="red";
  ctx.fill();
}


canvas.addEventListener("click",handleMapClick);

function handleMapClick(event){

  const rect=canvas.getBoundingClientRect();

  const mouseX=(event.clientX-rect.left)*(canvas.width/rect.width);
  const mouseY=(event.clientY-rect.top)*(canvas.height/rect.height);

  for(let id in nodes){

    let node=nodes[id];

    let distance=Math.sqrt(
      (mouseX-node.x)**2+
      (mouseY-node.y)**2
    );

    if(distance<25){
      selectNode(id);
      break;
    }
  }
}

function selectNode(id){

  console.log("Selected node:",id);

  if(player.moving){
    console.log("Player currently moving");
    return;
    showNodeInfo(id);
  }

  let route=findPath(
    player.currentNode,
    id
  );

  console.log("Route:",route);

  if(!route||!route.path){
    console.error("No valid route");
    return;
  }

  player.destination=id;

  if(route.distance>0){
    advanceTime(route.distance);
  }

  player.startMovement(route.path);
}
function showNodeInfo(id){

  let panel=document.getElementById("ridePanel");
  let node=nodes[id];

  if(!panel||!node)return;

  if(node.type!=="ride"){
    panel.style.display="none";
    return;
  }

  let ride=rides[id];

  panel.style.display="block";

  panel.innerHTML=
    "<b>"+ride.name+"</b><br>"+
    "Wait: "+ride.wait+" min<br>"+
    "Ride: "+ride.duration+" min<br>"+
    (ride.completed?"Completed":"Available");
}
