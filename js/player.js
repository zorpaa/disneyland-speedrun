// Player System
class Player{
constructor(){
  this.currentNode="hub";
  this.x=nodes.entrance.x;
  this.y=nodes.entrance.y;
  this.state="idle";
  this.speed=180;
  this.completed=[];
  this.path=[];
  this.pathIndex=0;
  this.moving=false;
  this.destination=null;
}

startMovement(path){
  if(!path||path.length<2)return;
  this.path=path;
  this.pathIndex=1;
  this.moving=true;
  this.state="walking";
  let distance=0;
  for(let i=0;i<path.length-1;i++){
    let a=nodes[path[i]];
    let b=nodes[path[i+1]];
    distance+=Math.sqrt(
      (b.x-a.x)**2+
      (b.y-a.y)**2
    );
  }

  // Average guest walking speed
  let minutes=Math.ceil(distance/250);

  addMinutes(minutes);
}

update(){
  if(!this.moving)return;
  if(this.pathIndex>=this.path.length){
    this.moving=false;
    arriveAtDestination();
    return;
  }
  let nextID=this.path[this.pathIndex];
  let next=nodes[nextID];
  if(!next){
    console.error("Missing node:",nextID);
    this.moving=false;
    return;
  }
  let dx=next.x-this.x;
  let dy=next.y-this.y;
  let distance=Math.sqrt(dx*dx+dy*dy);
  if(distance<=this.speed/60){
    this.x=next.x;
    this.y=next.y;
    this.currentNode=nextID;
    this.pathIndex++;
    return;
  }
  this.x+=(dx/distance)*(this.speed/60);
  this.y+=(dy/distance)*(this.speed/60);
}

}
const player=new Player();
function getWalkingTime(path){
  let distance=0;
  for(let i=0;i<path.length-1;i++){
    let a=nodes[path[i]];
    let b=nodes[path[i+1]];
    distance+=Math.sqrt(
      (b.x-a.x)**2+
      (b.y-a.y)**2
    );
  }
  return Math.ceil(distance/(player.speed*60));
}
