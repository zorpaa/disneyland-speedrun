// ====================
// Load Settings
// ====================

const settings={};


for(let category in settingsConfig){
  for(let option of settingsConfig[category]){

    let stored=
      sessionStorage.getItem(option.id);


    if(stored===null){
      settings[option.id]=option.default;

    }
    else{

      if(option.type==="checkbox"){
        settings[option.id]=stored==="true";

      }
      else if(option.type==="number"){
        settings[option.id]=Number(stored);

      }
      else{
        settings[option.id]=stored;

      }
    }
  }
}
