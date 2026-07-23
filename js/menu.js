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

console.log("menu.js loaded");
console.log("window.settingsConfig =", window.settingsConfig);
console.log("typeof settingsConfig =", typeof settingsConfig);

// ====================
// Start Game
// ====================
const startButton=document.getElementById("startGame");
if(startButton){
  startButton.addEventListener("click",()=>{
    for(let category in settingsConfig){
      for(let option of settingsConfig[category]){
        let element=document.getElementById(option.id);
        if(!element) continue;
        if(option.type==="checkbox"){
          sessionStorage.setItem(
            option.id,
            element.checked
          );
        }
        else if(option.type==="number"){
          sessionStorage.setItem(
            option.id,
            Number(element.value)
          );
        }
        else{
          sessionStorage.setItem(
            option.id,
            element.value
          );
        }
      }
    }
    window.location.href="game.html";
  });
}
