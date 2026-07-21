const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");
let hoveredNode=null;
let activeRoute=[];

function drawParkMap(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawConnections();
  drawRoute();
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
    if(hoveredNode===id){

  ctx.strokeStyle="white";
  ctx.lineWidth=4;

  ctx.beginPath();
  ctx.arc(node.x,node.y,27,0,Math.PI*2);
  ctx.stroke();

}
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
canvas.addEventListener("mousemove",handleHover);

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
      showNodeInfo(id,true);
      break;
    }
  }
}

function selectNode(id){

  console.log("Selected node:",id);

  if(player.moving){
    console.log("Player currently moving");
    return;
  }

  showNodeInfo(id);
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

  activeRoute=route.path;
  player.startMovement(route.path);
}

function showNodeInfo(id,selected=false){

  let panel=document.getElementById("ridePanel");
  let node=nodes[id];
  if(!panel||!node)return;
  if(node.type!=="ride"){
    panel.style.display="none";
    return;
  }

  let ride=rides[id];
  panel.style.display="block";
  if(!selected){
    panel.innerHTML=
      "<b>"+ride.name+"</b><br><br>"+
      "Wait: "+ride.currentWait+" min<br>"+
      "Ride: "+ride.duration+" min";
    return;
  }

  let route=findPath(
    player.currentNode,
    id
  );

  let walkTime=route.distance;
  let total=walkTime+
    ride.currentWait+
    ride.duration;

  let finish=parkTime.current+total;
  panel.innerHTML=
    "<b>"+ride.name+"</b><br><br>"+
    "Wait: "+ride.currentWait+" min<br>"+
    "Ride: "+ride.duration+" min<br>"+
    "Walk: "+walkTime+" min<br><br>"+
    "Total: "+total+" min<br>"+
    "Done: "+formatTime(finish)+"<br><br>"+
    "<button onclick=\"selectNode('"+id+"')\">Go To Ride</button>";
}

function handleHover(event){
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
      hoveredNode=id;
      showNodeInfo(id,false);
      return;
    }
  }
  hoveredNode=null;
}

function drawRoute(){

  if(activeRoute.length<2)return;

  ctx.strokeStyle="#2196f3";
  ctx.lineWidth=5;
  ctx.beginPath();

  for(let i=0;i<activeRoute.length;i++){
    let node=nodes[activeRoute[i]];
    if(i===0)
      ctx.moveTo(node.x,node.y);
    else
      ctx.lineTo(node.x,node.y);
  }

  ctx.stroke();
}
