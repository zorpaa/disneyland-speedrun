const crowd=document.getElementById("crowd");
const forecast=document.getElementById("forecast");

function updateForecast(){

  let text="";

  switch(crowd.value){

    case ".75":
      text="Today's Forecast<br><br>Quiet Crowd Day";
      break;

    case "1":
      text="Today's Forecast<br><br>Average Crowd Day";
      break;

    case "1.25":
      text="Today's Forecast<br><br>Busy Crowd Day";
      break;

    case "1.5":
      text="Today's Forecast<br><br>Holiday Crowd";
      break;

  }

  forecast.innerHTML=text;

}

crowd.onchange=updateForecast;

updateForecast();

document.getElementById("startGame").onclick=()=>{

  sessionStorage.setItem(
    "crowdMultiplier",
    document.getElementById("crowd").value
  );

  sessionStorage.setItem(
    "park",
    document.getElementById("park").value
  );

  window.location="game.html";

};
