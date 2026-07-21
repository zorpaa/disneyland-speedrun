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
  player.state="queued";
  console.log(
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
  player.state="riding";
  console.log("Riding:",ride.name);
  completeRide(id);
  queue.ride=null;
  queue.riding=false;
  updateQueueUI();
}

function updateQueueUI(){
  let panel=document.getElementById("queuePanel");
  if(!panel)return;
  if(!queue.ride){
    panel.innerText="No queue";
    return;
  }
  let ride=rides[queue.ride];
  let start=parkTime.current+queue.remaining;
  let end=start+ride.duration;
  panel.innerHTML=
  "<b>Currently Queued</b><br><br>"+
  ride.name+
  "<br><br>"+
  "Your Wait: "+
  queue.remaining+
  " min<br>"+
  "Current Posted Wait: "+
  ride.currentWait+
  " min<br><br>"+
  "Ride Starts: "+
  formatTime(start)+
  "<br>"+
  "Ride Ends: "+
  formatTime(end);
    "<b>Currently Queued:</b><br>"+
    ride.name+
    "<br><br>"+
    "Wait Remaining: "+
    queue.remaining+
    " min<br>"+
    "Ride Starts: "+
    formatTime(start)+
    "<br>"+
    "Ride Ends: "+
    formatTime(end);
}

setInterval(()=>{

  if(queue.ride){
    updateQueue();
  }

},1000);
