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
    for(let c of node.connections){
      let t=nodes[c.node];
      if(!t)continue;
      ctx.beginPath();
      ctx.moveTo(pos.x,pos.y);
      ctx.lineTo(t.x,t.y);
      ctx.stroke();
    }
  }
}

function drawNodes(){
  for(let id in nodes){
    let node=nodes[id];

    ctx.beginPath();

    if(node.type==="ride"){
      let pos=worldToScreen(pos.x,pos.y);
      ctx.arc(pos.x,pos.y,20*camera.zoom,0,Math.PI*2);
    }else{
      ctx.moveTo(pos.x,pos.y-20);
      ctx.lineTo(pos.x+20,pos.y);
      ctx.lineTo(pos.x,pos.y+20);
      ctx.lineTo(pos.x-20,pos.y);
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
        ctx.arc(pos.x,pos.y,27,0,Math.PI*2);
      }else{
        ctx.moveTo(pos.x,pos.y-27);
        ctx.lineTo(pos.x+27,pos.y);
        ctx.lineTo(pos.x,pos.y+27);
        ctx.lineTo(pos.x-27,pos.y);
        ctx.closePath();
      }

      if(node.type==="ride"&&rides[id]?.completed){
  ctx.fillStyle="black";
  ctx.font="16px Arial";
  ctx.textAlign="center";
  ctx.fillText("✓",pos.x,pos.y+6);
  ctx.textAlign="left";
}
      
      ctx.stroke();
    }

    if(node.showLabel){
      ctx.fillStyle="black";
      ctx.font="12px Arial";
      ctx.textAlign="center";
      ctx.fillText(node.name,pos.x,pos.y-35);
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

canvas.addEventListener("click",handleMapClick);
canvas.addEventListener("mousemove",handleHover);

function handleMapClick(e){
  let r=canvas.getBoundingClientRect();
  let x=(e.clientX-r.left)*(canvas.width/r.width);
  let y=(e.clientY-r.top)*(canvas.height/r.height);

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
  let x=(e.clientX-r.left)*(canvas.width/r.width);
  let y=(e.clientY-r.top)*(canvas.height/r.height);

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
    let n=nodes[id];
    i?ctx.lineTo(n.x,n.y):ctx.moveTo(n.x,n.y);
  });

  ctx.stroke();
}
