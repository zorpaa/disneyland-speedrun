// ====================
// Advanced Settings
// ====================

const advancedToggle=document.getElementById("advancedToggle");
const advancedSettings=document.getElementById("advancedSettings");

advancedToggle.addEventListener("click",()=>{

  const open=advancedSettings.style.display==="block";

  advancedSettings.style.display=open?"none":"block";

  advancedToggle.textContent=
    (open?"►":"▼")+" Advanced Settings";

});

// ====================
// Start Game
// ====================

document.getElementById("startGame").addEventListener("click",()=>{

  // Existing settings
  sessionStorage.setItem(
    "crowdMultiplier",
    document.getElementById("crowd").value
  );

  sessionStorage.setItem(
    "season",
    document.getElementById("season").value
  );

  // Needs
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

  // Map
  sessionStorage.setItem(
    "showRideLabels",
    document.getElementById("rideLabels").checked
  );

  sessionStorage.setItem(
    "showJunctionLabels",
    document.getElementById("junctionLabels").checked
  );

  sessionStorage.setItem(
    "nodeSize",
    document.getElementById("nodeSize").value
  );

  sessionStorage.setItem(
    "textSize",
    document.getElementById("textSize").value
  );

  window.location.href="game.html";

});
