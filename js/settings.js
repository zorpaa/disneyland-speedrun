// ====================
// Game Settings
// ====================

const settings={

  season:
    sessionStorage.getItem("season")||"Summer",

  bathroomEnabled:
    sessionStorage.getItem("bathroomEnabled")==="true",

  foodEnabled:
    sessionStorage.getItem("foodEnabled")==="true",

  happinessEnabled:
    sessionStorage.getItem("happinessEnabled")==="true",

  fatigueEnabled:
    sessionStorage.getItem("fatigueEnabled")==="true",

  map:{

    showRideLabels:
      sessionStorage.getItem("showRideLabels")!=="false",

    showJunctionLabels:
      sessionStorage.getItem("showJunctionLabels")!=="false",

    nodeSize:Number(
      sessionStorage.getItem("nodeSize")
    )||40,

    textSize:Number(
      sessionStorage.getItem("textSize")
    )||14,

    nodeColor:"#00e5ff",
    pathColor:"#888"

  }

};

console.log("Settings Loaded",settings);
