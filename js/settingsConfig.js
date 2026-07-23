// ====================
// Settings Configuration
// ====================

console.log("settingsConfig loaded");
const settingsConfig = {

  season:"summer",

  bathroom:true,
  food:true,
  happiness:true,
  fatigue:true,

  map:{
    nodeSize:40,
    textSize:14,
    nodeColor:"#00e5ff",
    pathColor:"#888",
    textVisible:true
  }

};

  needs:[

    {
      id:"bathroom",
      type:"checkbox",
      name:"Bathroom",
      default:true
    },

    {
      id:"food",
      type:"checkbox",
      name:"Food",
      default:true
    },

    {
      id:"happiness",
      type:"checkbox",
      name:"Happiness",
      default:true
    },
    {
      id:"fatigue",
      type:"checkbox",
      name:"Fatigue",
      default:true
    }
  ],
  
  map:[

    {
      id:"showRideLabels",
      type:"checkbox",
      name:"Ride Labels",
      default:true
    },

    {
      id:"showJunctionLabels",
      type:"checkbox",
      name:"Junction Labels",
      default:true
    },

    {
      id:"nodeSize",
      type:"number",
      name:"Node Size",
      default:40
    },

    {
      id:"textSize",
      type:"number",
      name:"Text Size",
      default:14
    }
  ]
};
