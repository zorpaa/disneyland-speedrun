// ====================
// Advanced Settings Toggle
// ====================

const advancedToggle=document.getElementById("advancedToggle");
const advancedSettings=document.getElementById("advancedSettings");

if(advancedToggle&&advancedSettings){

  advancedToggle.addEventListener("click",()=>{

    const open=advancedSettings.style.display==="block";

    advancedSettings.style.display=open?"none":"block";

    advancedToggle.textContent=
      (open?"►":"▼")+" Advanced Settings";

  });

}

// ====================
// Start Game
// ====================

const startButton=document.getElementById("startGame");

if(startButton){

  startButton.addEventListener("click",()=>{

    // Existing settings
    sessionStorage.setItem(
      "crowdMultiplier",
      document.getElementById("crowd").value
    );

    // New settings
    sessionStorage.setItem(
      "season",
      document.getElementById("season").value
    );

    sessionStorage.setItem(
      "bathroomEnabled",
      document.getElementById("bathroom").checked
    );

    sessionStorage.setItem(
      "foodEnabled",
      document.getElementById("food").checked
    );

    sessionStorage.setItem(
      "happinessEnabled",
      document.getElementById("happiness").checked
    );

    sessionStorage.setItem(
      "fatigueEnabled",
      document.getElementById("fatigue").checked
    );

    sessionStorage.setItem(
      "showRideLabels",
      document.getElementById("rideLabels").checked
    );

    sessionStorage.setItem(
      "showJunctionLabels",
      document.getElementById("junctionLabels").checked
    );

    window.location.href="game.html";

  });

}
