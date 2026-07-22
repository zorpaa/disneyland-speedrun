const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");
let hoveredNode=null;
let activeRoute=[];
let selectedNode=null;
let fitZoom = 1;
const camera={
  x:0,
  y:0,
  zoom:1
};
const CAMERA_MAX_ZOOM = 3;
const CAMERA_MIN_ZOOM = 0.15;

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

const parkMap={
  image:null,
  loaded:false,
  x:0,
  y:0,
  width:3000,
  height:3000
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
    // Node shape
    if(node.type==="ride"){
      ctx.arc(
        pos.x,
        pos.y,
        40*camera.zoom,
        0,
        Math.PI*2
      );
    }else{
      ctx.moveTo(
        pos.x,
        pos.y-(40*camera.zoom)
      );
      ctx.lineTo(
        pos.x+(40*camera.zoom),
        pos.y
      );
      ctx.lineTo(
        pos.x,
        pos.y+(40*camera.zoom)
      );
      ctx.lineTo(
        pos.x-(40*camera.zoom),
        pos.y
      );
      ctx.closePath();
    }
    // Colors
    if(node.type==="ride"){
      ctx.fillStyle="#00e5ff";
    }else{
      ctx.fillStyle=landColors[node.land]||"#999";
    }
    // Glow
    ctx.shadowColor="white";
    ctx.shadowBlur=8;
    ctx.fill();
    // Hover outline
    if(hoveredNode===id){
      ctx.strokeStyle="white";
      ctx.lineWidth=4;
      ctx.beginPath();
      if(node.type==="ride"){
        ctx.arc(
          pos.x,
          pos.y,
          55*camera.zoom,
          0,
          Math.PI*2
        );
      }else{
        ctx.moveTo(
          pos.x,
          pos.y-(55*camera.zoom)
        );
        ctx.lineTo(
          pos.x+(55*camera.zoom),
          pos.y
        );
        ctx.lineTo(
          pos.x,
          pos.y+(55*camera.zoom)
        );
        ctx.lineTo(
          pos.x-(55*camera.zoom),
          pos.y
        );
        ctx.closePath();
      }
      ctx.stroke();
    }
    // Completed ride checkmark
    if(node.type==="ride"&&rides[id]?.completed){
      ctx.fillStyle="black";
      ctx.font=(20*camera.zoom)+"px Arial";
      ctx.textAlign="center";
      ctx.fillText(
        "✓",
        pos.x,
        pos.y+(7*camera.zoom)
      );
      ctx.textAlign="left";
    }
    // Labels
    if(node.showLabel){
      ctx.font="bold "+(14*camera.zoom)+"px Arial";
      ctx.textAlign="center";
      // White border
      ctx.strokeStyle="white";
      ctx.lineWidth=4*camera.zoom;
      ctx.strokeText(
        node.name,
        pos.x,
        pos.y-(55*camera.zoom)
      );
      // Black text
      ctx.fillStyle="black";
      ctx.fillText(
        node.name,
        pos.x,
        pos.y-(55*camera.zoom)
      );
      ctx.textAlign="left";
    }
    // Reset effects
    ctx.shadowBlur=0;
  }
}

function drawPlayer(){

  ctx.beginPath();

  let pos=worldToScreen(
    player.x,
    player.y
  );

  ctx.arc(
    pos.x,
    pos.y,
    20*camera.zoom,
    0,
    Math.PI*2
  );

  ctx.fillStyle="red";
  ctx.fill();

  ctx.shadowBlur=0;

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

  ctx.fillStyle = "rgba(255,255,255,0.45)";
ctx.fillRect(
  0,
  0,
  canvas.width,
  canvas.height
);
  
}

function loadParkMap(){
  parkMap.image=new Image();
  parkMap.image.onload=()=>{
    parkMap.loaded=true;
    resetCamera();
  };
  parkMap.image.src="parkmap.png";
}

function showMapCoordinates(event){
  let rect=canvas.getBoundingClientRect();
  let screenX=(event.clientX-rect.left)*(canvas.width/rect.width);
  let screenY=(event.clientY-rect.top)*(canvas.height/rect.height);
  let worldX=Math.round(
  screenX/camera.zoom+camera.x
);

let worldY=Math.round(
  screenY/camera.zoom+camera.y
);
  console.log(
    "Map Coordinates:",
    worldX,
    worldY
  );
}

canvas.addEventListener("click",handleMapClick);
canvas.addEventListener("mousemove",handleHover);
canvas.addEventListener("wheel",handleZoom);
canvas.addEventListener("mousedown",startDrag);
canvas.addEventListener("mouseup",endDrag);
canvas.addEventListener("mouseleave",endDrag);
canvas.addEventListener("mousemove",dragCamera);
canvas.addEventListener("click",showMapCoordinates);

function zoomIn(){
  camera.zoom+=0.2;
  if(camera.zoom<CAMERA_MIN_ZOOM)
    camera.zoom=CAMERA_MIN_ZOOM;
  drawParkMap();
}
function zoomOut(){
  camera.zoom-=0.2;
  if(camera.zoom<fitZoom)
    camera.zoom=fitZoom;
  if(camera.zoom>CAMERA_MAX_ZOOM)
    camera.zoom=CAMERA_MAX_ZOOM;
  drawParkMap();
}
function resetCamera(){
  fitMap();
}

function fitMap(){
  let padding=200;
  let mapWidth=parkMap.width+padding*2;
  let mapHeight=parkMap.height+padding*2;
  fitZoom=Math.min(
    canvas.width/mapWidth,
    canvas.height/mapHeight
  );
  camera.zoom=fitZoom;
  camera.x=parkMap.x-padding;
  camera.y=parkMap.y-padding;
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
  if(camera.zoom<fitZoom)
    camera.zoom=fitZoom;
  if(camera.zoom>CAMERA_MAX_ZOOM)
    camera.zoom=CAMERA_MAX_ZOOM;
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
    if(Math.hypot(x-n.x,y-n.y)<45){
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

    if(Math.hypot(x-n.x,y-n.y)<45){
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

window.addEventListener("load",()=>{
  loadParkMap();
  setTimeout(()=>{
    resetCamera();
  },200);
});
