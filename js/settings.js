// ====================
// Game Settings
// ====================

const settings={

  // Gameplay
  crowdMultiplier:Number(sessionStorage.getItem("crowdMultiplier"))||1,
  season:sessionStorage.getItem("season")||"summer",

  // Needs
  bathroom:sessionStorage.getItem("bathroomEnabled")==="true",
  food:sessionStorage.getItem("foodEnabled")==="true",
  happiness:sessionStorage.getItem("happinessEnabled")==="true",
  fatigue:sessionStorage.getItem("fatigueEnabled")==="true",

  // Map
  showRideLabels:
    sessionStorage.getItem("showRideLabels")!=="false",
  showJunctionLabels:
    sessionStorage.getItem("showJunctionLabels")!=="false",
  nodeSize:Number(sessionStorage.getItem("nodeSize"))||40,
  textSize:Number(sessionStorage.getItem("textSize"))||14
};
