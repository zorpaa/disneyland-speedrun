const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");
let hoveredNode=null;
let activeRoute=[];
let selectedNode=null;
const camera={
  x:0,
  y:0,
  zoom:1
};
function worldToScreen(x,y){

  return {
    x:(x-camera.x)*camera.zoom,
    y:(y-camera.y)*camera.zoom
  };

}
const landColors={
  "Entrance":"#555",
  "Main Street":"#f2c94c",
  "Hub":"#777",
  "Tomorrowland":"#4da6ff",
  "Fantasyland":"#ff99cc",
  "Adventureland":"#66cc66",
  "Frontierland":"#cc9966",
  "Galaxy's Edge":"#9966ff"
};

function drawParkMap(){
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );
  drawBackground();
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

    let pos=worldToScreen(node.x,node.y);

    for(let c of node.connections){
      let t=nodes[c.node];
      if(!t)continue;

      let target=worldToScreen(t.x,t.y);

      ctx.beginPath();
      ctx.moveTo(pos.x,pos.y);
      ctx.lineTo(target.x,target.y);
      ctx.stroke();
    }
  }
}

function drawNodes(){
  for(let id in nodes){
    let node=nodes[id];
    let pos=worldToScreen(node.x,node.y);

    ctx.beginPath();

    if(node.type==="ride"){
      ctx.arc(
        pos.x,
        pos.y,
        20*camera.zoom,
        0,
        Math.PI*2
      );
    }else{
      ctx.moveTo(pos.x,pos.y-(20*camera.zoom));
      ctx.lineTo(pos.x+(20*camera.zoom),pos.y);
      ctx.lineTo(pos.x,pos.y+(20*camera.zoom));
      ctx.lineTo(pos.x-(20*camera.zoom),pos.y);
      ctx.closePath();
    }

    if(node.type==="ride"&&rides[id]?.completed){
      ctx.fillStyle="#999";
    }else{
      ctx.fillStyle=landColors[node.land]||"#999";
    }

    ctx.fill();

    if(hoveredNode===id){

      ctx.strokeStyle="white";
      ctx.lineWidth=4;

      ctx.beginPath();

      if(node.type==="ride"){
        ctx.arc(
          pos.x,
          pos.y,
          27*camera.zoom,
          0,
          Math.PI*2
        );
      }else{
        ctx.moveTo(pos.x,pos.y-(27*camera.zoom));
        ctx.lineTo(pos.x+(27*camera.zoom),pos.y);
        ctx.lineTo(pos.x,pos.y+(27*camera.zoom));
        ctx.lineTo(pos.x-(27*camera.zoom),pos.y);
        ctx.closePath();
      }

      ctx.stroke();
    }

    if(node.type==="ride"&&rides[id]?.completed){
      ctx.fillStyle="black";
      ctx.font=(16*camera.zoom)+"px Arial";
      ctx.textAlign="center";
      ctx.fillText("✓",pos.x,pos.y+(6*camera.zoom));
      ctx.textAlign="left";
    }

    if(node.showLabel){
      ctx.fillStyle="black";
      ctx.font=(12*camera.zoom)+"px Arial";
      ctx.textAlign="center";
      ctx.fillText(
        node.name,
        pos.x,
        pos.y-(35*camera.zoom)
      );
      ctx.textAlign="left";
    }
  }
}

function drawPlayer(){
  ctx.beginPath();
  let pos=worldToScreen(player.x,player.y);
  ctx.arc(pos.x,pos.y,10*camera.zoom,0,Math.PI*2);
  ctx.fillStyle="red";
  ctx.fill();
}

function drawBackground(){
  if(!parkMap.loaded)return;
  let pos=worldToScreen(
    parkMap.x,
    parkMap.y
  );

  ctx.drawImage(
    parkMap.image,
    pos.x,
    pos.y,
    parkMap.width*camera.zoom,
    parkMap.height*camera.zoom
  );

}

function loadParkMap(){
  parkMap.image=new Image();
  parkMap.image.src="parkmap.png";
  parkMap.image.onload=()=>{
    parkMap.loaded=true;
    drawParkMap();
  };
}

canvas.addEventListener("click",handleMapClick);
canvas.addEventListener("mousemove",handleHover);
canvas.addEventListener("wheel",handleZoom);
canvas.addEventListener("mousedown",startDrag);
canvas.addEventListener("mouseup",endDrag);
canvas.addEventListener("mouseleave",endDrag);
canvas.addEventListener("mousemove",dragCamera);

const parkMap={
  image:null,
  loaded:false,
  x:0,
  y:0,
  width:3000,
  height:3000
};

function zoomIn(){
  camera.zoom+=0.2;
  if(camera.zoom>3)
    camera.zoom=3;
  drawParkMap();
}
function zoomOut(){
  camera.zoom-=0.2;
  if(camera.zoom<0.5)
    camera.zoom=0.5;
  drawParkMap();
}
function resetCamera(){
  camera.x=0;
  camera.y=0;
  camera.zoom=1;
  drawParkMap();
}

let dragging=false;
let dragStartX=0;
let dragStartY=0;
let cameraStartX=0;
let cameraStartY=0;
let dragged=false;

function handleZoom(event){
  event.preventDefault();
  let rect=canvas.getBoundingClientRect();
  let mouseX=(event.clientX-rect.left)*(canvas.width/rect.width);
  let mouseY=(event.clientY-rect.top)*(canvas.height/rect.height);
  let worldX=mouseX/camera.zoom+camera.x;
  let worldY=mouseY/camera.zoom+camera.y;
  let zoomAmount=0.1;
  if(event.deltaY<0){
    camera.zoom+=zoomAmount;
  }else{
    camera.zoom-=zoomAmount;
  }
  if(camera.zoom<0.5)
    camera.zoom=0.5;
  if(camera.zoom>3)
    camera.zoom=3;
  camera.x=worldX-(mouseX/camera.zoom);
  camera.y=worldY-(mouseY/camera.zoom);
  drawParkMap();
}

function startDrag(event){
  dragging=true;
  dragged=false;
  dragStartX=event.clientX;
  dragStartY=event.clientY;
  cameraStartX=camera.x;
  cameraStartY=camera.y;

}
function dragCamera(event){

  if(!dragging)return;


  let dx=event.clientX-dragStartX;
  let dy=event.clientY-dragStartY;


  if(Math.abs(dx)>5 || Math.abs(dy)>5){
    dragged=true;
  }
  if(!dragged)return;
  camera.x=cameraStartX-(dx/camera.zoom);
  camera.y=cameraStartY-(dy/camera.zoom);
  drawParkMap();
}
function endDrag(){
  dragging=false;
}
function handleMapClick(e){

  if(dragged){
  dragged=false;
  return;
}
  
  let r=canvas.getBoundingClientRect();
  let screenX=(e.clientX-r.left)*(canvas.width/r.width);
  let screenY=(e.clientY-r.top)*(canvas.height/r.height);
  let x=screenX/camera.zoom+camera.x;
  let y=screenY/camera.zoom+camera.y;

  for(let id in nodes){
    let n=nodes[id];
    if(Math.hypot(x-n.x,y-n.y)<25){
      selectedNode=null;
      n.type==="ride"?showNodeInfo(id,true):selectNode(id);
      break;
    }
  }
}

function selectNode(id){
  if(player.moving){
    console.log("Player currently moving");
    return;
  }

  selectedNode=null;

  let panel=document.getElementById("ridePanel");
  if(panel)panel.style.display="none";

  let route=findPath(player.currentNode,id);

  if(!route.path)return;

  player.destination=id;

  if(route.distance>0)
    advanceTime(route.distance);

  activeRoute=route.path;
  player.startMovement(route.path);
}

function showNodeInfo(id,selected=false){
  let panel=document.getElementById("ridePanel");
  let node=nodes[id];
  let ride=rides[id];

  if(!panel||!node||!ride)return;

  panel.style.display="block";

  if(!selected){
    panel.innerHTML=
    "<b>"+ride.name+"</b><br><br>"+
    "Wait: "+ride.currentWait+" min<br>"+
    "Ride: "+ride.duration+" min";
    return;
  }

  selectedNode=id;

  let route=findPath(player.currentNode,id);
  let walkTime=route.distance;

  let total=
    walkTime+
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

function handleHover(e){
  let r=canvas.getBoundingClientRect();
  let screenX=(e.clientX-r.left)*(canvas.width/r.width);
  let screenY=(e.clientY-r.top)*(canvas.height/r.height);
  let x=screenX/camera.zoom+camera.x;
  let y=screenY/camera.zoom+camera.y;

  for(let id in nodes){
    let n=nodes[id];

    if(Math.hypot(x-n.x,y-n.y)<25){
      hoveredNode=id;

      if(n.type==="ride"&&!selectedNode)
        showNodeInfo(id,false);

      return;
    }
  }

  hoveredNode=null;

  if(selectedNode)return;

  let panel=document.getElementById("ridePanel");
  if(panel)panel.style.display="none";
}

function drawRoute(){
  if(activeRoute.length<2)return;

  ctx.strokeStyle="#2196f3";
  ctx.lineWidth=5;

  ctx.beginPath();

  activeRoute.forEach((id,i)=>{
    let node=nodes[id];
    let pos=worldToScreen(node.x,node.y);

    if(i===0){
      ctx.moveTo(pos.x,pos.y);
    }else{
      ctx.lineTo(pos.x,pos.y);
    }
  });

  ctx.stroke();
}

loadParkMap();
