// Park Setup

const park={
  name:"Disneyland",
  open:"8:00 AM",
  close:"12:00 AM"
};
function startPark(){
  parkTime.current=parkTime.open;
  updateClock();
  updateRideCounter();
}
function checkPark(){
  if(parkIsClosed()){
    alert("Park is closed!");
    return false;
  }
  return true;
}
