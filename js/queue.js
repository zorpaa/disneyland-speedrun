// Queue System

const queue={
  ride:null,
  remaining:0,
  riding:false
};


function joinQueue(id){
  let ride=rides[id];
  if(!ride||ride.completed)return;
  queue.ride=id;
  queue.remaining=ride.currentWait;
  console.log(
  player.state="queued";
    "Joined queue:",
    ride.name,
    queue.remaining+" min"
  );
  updateQueueUI();
}


function updateQueue(){
  if(!queue.ride)return;
  if(queue.remaining>0){
    queue.remaining--;
    parkTime.current++;
    updateClock();
    updateQueueUI();
    return;
  }

  startRide(queue.ride);
}

function startRide(id){
  let ride=rides[id];
  if(!ride)return;
  queue.riding=true;
  console.log("Riding:",ride.name);
  completeRide(id);
  queue.ride=null;
  queue.riding=false;
  player.state="riding";
  updateQueueUI();
}


function updateQueueUI(){
  let panel=document.getElementById("queue");
  if(!panel)return;
  if(!queue.ride){
    panel.innerText="No queue";
    return;
  }

  let ride=rides[queue.ride];
  panel.innerText=
    "Queue: "+
    ride.name+
    " ("+
    queue.remaining+
    " min)";
}
setInterval(()=>{

  if(queue.ride){
    updateQueue();
  }

},1000);
