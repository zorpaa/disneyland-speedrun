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
