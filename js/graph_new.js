// ====================
// Disneyland Node Graph
// New Map Layout - Chunk 1
// ====================

const nodes = {

  // ====================
  // Main Park Spine
  // ====================

  entrance:{
    id:"entrance",
    name:"Main Entrance",
    type:"junction",
    land:"Entrance",
    x:1700,
    y:2500,
    showLabel:true,
    connections:[
      {node:"mainStreet"}
    ]
  },


  mainStreet:{
    id:"mainStreet",
    name:"Main Street USA",
    type:"junction",
    land:"Main Street",
    x:1700,
    y:2000,
    showLabel:true,
    connections:[
      {node:"entrance"},
      {node:"hub"}
    ]
  },


  hub:{
    id:"hub",
    name:"Central Hub",
    type:"junction",
    land:"Hub",
    x:1700,
    y:1600,
    showLabel:true,
    connections:[
      {node:"mainStreet"},
      {node:"fantasyland"},
      {node:"tomorrowlandEntrance"},
      {node:"adventureland"},
      {node:"frontierlandEntrance"}
    ]
  },


  // ====================
  // Fantasyland
  // ====================


  fantasyland:{
    id:"fantasyland",
    name:"Castle / Fantasyland Entrance",
    type:"junction",
    land:"Fantasyland",
    x:1700,
    y:1350,
    showLabel:true,
    connections:[
      {node:"hub"},
      {node:"fantasylandHub"}
    ]
  },


  fantasylandHub:{
    id:"fantasylandHub",
    name:"Fantasyland Hub",
    type:"junction",
    land:"Fantasyland",
    x:1700,
    y:1050,
    showLabel:true,
    connections:[
      {node:"fantasyland"},
      {node:"fantasylandWest"},
      {node:"fantasylandEast"},
      {node:"matterhornSouth"}
    ]
  },


  fantasylandWest:{
    id:"fantasylandWest",
    name:"Fantasyland West",
    type:"junction",
    land:"Fantasyland",
    x:1550,
    y:1050,
    showLabel:true,
    connections:[
      {node:"fantasylandHub"}
    ]
  },


  fantasylandEast:{
    id:"fantasylandEast",
    name:"Fantasyland East",
    type:"junction",
    land:"Fantasyland",
    x:1900,
    y:1050,
    showLabel:true,
    connections:[
      {node:"fantasylandHub"},
      {node:"smallWorldJunction"},
      {node:"matterhornNorth"}
    ]
  },


  matterhornSouth:{
    id:"matterhornSouth",
    name:"Matterhorn Junction South",
    type:"junction",
    land:"Fantasyland",
    x:1900,
    y:1400,
    showLabel:true,
    connections:[
      {node:"fantasylandHub"},
      {node:"matterhornNorth"},
      {node:"tomorrowlandEntrance"}
    ]
  },


  matterhornNorth:{
    id:"matterhornNorth",
    name:"Matterhorn Junction North",
    type:"junction",
    land:"Fantasyland",
    x:2000,
    y:1100,
    showLabel:true,
    connections:[
      {node:"matterhornSouth"},
      {node:"fantasylandEast"},
      {node:"smallWorldJunction"}
    ]
  },


  smallWorldJunction:{
    id:"smallWorldJunction",
    name:"Small World Junction",
    type:"junction",
    land:"Fantasyland",
    x:2000,
    y:850,
    showLabel:true,
    connections:[
      {node:"fantasylandEast"},
      {node:"matterhornNorth"},
      {node:"toonTown"}
    ]
  },


  // ====================
  // Tomorrowland
  // ====================


  tomorrowlandEntrance:{
    id:"tomorrowlandEntrance",
    name:"Tomorrowland Entrance",
    type:"junction",
    land:"Tomorrowland",
    x:1850,
    y:1700,
    showLabel:true,
    connections:[
      {node:"hub"},
      {node:"tomorrowland"},
      {node:"matterhornSouth"}
    ]
  },


  tomorrowland:{
    id:"tomorrowland",
    name:"Tomorrowland Center",
    type:"junction",
    land:"Tomorrowland",
    x:2300,
    y:1650,
    showLabel:true,
    connections:[
      {node:"tomorrowlandEntrance"}
    ]
  },


  // ====================
  // Adventureland / NOS
  // ====================


  adventureland:{
    id:"adventureland",
    name:"Adventureland Entrance",
    type:"junction",
    land:"Adventureland",
    x:1500,
    y:1800,
    showLabel:true,
    connections:[
      {node:"hub"},
      {node:"adventurelandHub"},
      {node:"frontierlandEntrance"}
    ]
  },


  adventurelandHub:{
    id:"adventurelandHub",
    name:"Adventureland Hub",
    type:"junction",
    land:"Adventureland",
    x:1200,
    y:1900,
    showLabel:true,
    connections:[
      {node:"adventureland"},
      {node:"newOrleansSquare"}
    ]
  },


  newOrleansSquare:{
    id:"newOrleansSquare",
    name:"New Orleans Square",
    type:"junction",
    land:"New Orleans Square",
    x:1050,
    y:1900,
    showLabel:true,
    connections:[
      {node:"adventurelandHub"},
      {node:"hauntedMansionPath"},
      {node:"bayouCountry"}
    ]
  },


  hauntedMansionPath:{
    id:"hauntedMansionPath",
    name:"Haunted Mansion Path",
    type:"junction",
    land:"New Orleans Square",
    x:750,
    y:1740,
    showLabel:true,
    connections:[
      {node:"newOrleansSquare"},
      {node:"galaxysEdgeWest"}
    ]
  },


  bayouCountry:{
    id:"bayouCountry",
    name:"Bayou Country Entrance",
    type:"junction",
    land:"Bayou Country",
    x:650,
    y:1700,
    showLabel:true,
    connections:[
      {node:"newOrleansSquare"}
    ]
  },
    // ====================
  // Frontierland
  // ====================


  frontierlandEntrance:{
    id:"frontierlandEntrance",
    name:"Frontierland Entrance",
    type:"junction",
    land:"Frontierland",
    x:1450,
    y:1650,
    showLabel:true,
    connections:[
      {node:"hub"},
      {node:"adventureland"},
      {node:"frontierHub"}
    ]
  },


  frontierHub:{
    id:"frontierHub",
    name:"Frontierland Hub",
    type:"junction",
    land:"Frontierland",
    x:1150,
    y:1480,
    showLabel:true,
    connections:[
      {node:"frontierlandEntrance"},
      {node:"galaxysEdgeEast"}
    ]
  },


  // ====================
  // Galaxy's Edge
  // ====================


  galaxysEdgeWest:{
    id:"galaxysEdgeWest",
    name:"Galaxy's Edge West Entrance",
    type:"junction",
    land:"Galaxy's Edge",
    x:280,
    y:1050,
    showLabel:true,
    connections:[
      {node:"hauntedMansionPath"},
      {node:"galaxysEdgeHub"}
    ]
  },


  galaxysEdgeHub:{
    id:"galaxysEdgeHub",
    name:"Galaxy's Edge Hub",
    type:"junction",
    land:"Galaxy's Edge",
    x:650,
    y:800,
    showLabel:true,
    connections:[
      {node:"galaxysEdgeWest"},
      {node:"galaxysEdgeEast"}
    ]
  },


  galaxysEdgeEast:{
    id:"galaxysEdgeEast",
    name:"Galaxy's Edge East Entrance",
    type:"junction",
    land:"Galaxy's Edge",
    x:1000,
    y:1000,
    showLabel:true,
    connections:[
      {node:"galaxysEdgeHub"},
      {node:"frontierHub"}
    ]
  },


  // ====================
  // Toontown
  // ====================


  toonTown:{
    id:"toonTown",
    name:"Toontown Entrance",
    type:"junction",
    land:"Toontown",
    x:1900,
    y:500,
    showLabel:true,
    connections:[
      {node:"smallWorldJunction"},
      {node:"toonTownHub"}
    ]
  },


  toonTownHub:{
    id:"toonTownHub",
    name:"Toontown Hub",
    type:"junction",
    land:"Toontown",
    x:1770,
    y:350,
    showLabel:true,
    connections:[
      {node:"toonTown"}
    ]
  },
  
// ====================
// Rides
// ====================


// ====================
// Tomorrowland Rides
// ====================

spaceMountain:{
  id:"spaceMountain",
  name:"Space Mountain",
  type:"ride",
  land:"Tomorrowland",
  x:2450,
  y:1450,
  connections:[
    {node:"tomorrowland"}
  ]
},


starTours:{
  id:"starTours",
  name:"Star Tours",
  type:"ride",
  land:"Tomorrowland",
  x:2500,
  y:1350,
  connections:[
    {node:"tomorrowland"}
  ]
},


buzzLightyear:{
  id:"buzzLightyear",
  name:"Buzz Lightyear Astro Blasters",
  type:"ride",
  land:"Tomorrowland",
  x:2400,
  y:1600,
  connections:[
    {node:"tomorrowland"}
  ]
},


autopia:{
  id:"autopia",
  name:"Autopia",
  type:"ride",
  land:"Tomorrowland",
  x:2600,
  y:1700,
  connections:[
    {node:"tomorrowland"}
  ]
},


submarine:{
  id:"submarine",
  name:"Finding Nemo Submarine Voyage",
  type:"ride",
  land:"Tomorrowland",
  x:2100,
  y:1450,
  connections:[
    {node:"tomorrowlandEntrance"}
  ]
},


// ====================
// Fantasyland Rides
// ====================

matterhorn:{
  id:"matterhorn",
  name:"Matterhorn Bobsleds",
  type:"ride",
  land:"Fantasyland",
  x:2050,
  y:1300,
  connections:[
    {node:"matterhornNorth"}
  ]
},


peterPan:{
  id:"peterPan",
  name:"Peter Pan's Flight",
  type:"ride",
  land:"Fantasyland",
  x:1500,
  y:950,
  connections:[
    {node:"fantasylandWest"}
  ]
},


mrToad:{
  id:"mrToad",
  name:"Mr. Toad's Wild Ride",
  type:"ride",
  land:"Fantasyland",
  x:1550,
  y:1150,
  connections:[
    {node:"fantasylandWest"}
  ]
},


pinocchio:{
  id:"pinocchio",
  name:"Pinocchio's Daring Journey",
  type:"ride",
  land:"Fantasyland",
  x:1600,
  y:1000,
  connections:[
    {node:"fantasylandWest"}
  ]
},


alice:{
  id:"alice",
  name:"Alice in Wonderland",
  type:"ride",
  land:"Fantasyland",
  x:2000,
  y:1200,
  connections:[
    {node:"matterhornNorth"}
  ]
},


smallWorld:{
  id:"smallWorld",
  name:"it's a small world",
  type:"ride",
  land:"Fantasyland",
  x:2100,
  y:800,
  connections:[
    {node:"smallWorldJunction"}
  ]
},


dumbo:{
  id:"dumbo",
  name:"Dumbo the Flying Elephant",
  type:"ride",
  land:"Fantasyland",
  x:1800,
  y:1200,
  connections:[
    {node:"fantasylandEast"}
  ]
},


// ====================
// Adventureland / Frontierland
// ====================

indianaJones:{
  id:"indianaJones",
  name:"Indiana Jones Adventure",
  type:"ride",
  land:"Adventureland",
  x:900,
  y:2050,
  connections:[
    {node:"adventurelandHub"}
  ]
},


bigThunder:{
  id:"bigThunder",
  name:"Big Thunder Mountain",
  type:"ride",
  land:"Frontierland",
  x:1150,
  y:1350,
},


// ====================
// Galaxy's Edge Rides
// ====================

riseResistance:{
  id:"riseResistance",
  name:"Rise of the Resistance",
  type:"ride",
  land:"Galaxy's Edge",
  x:450,
  y:700,
},


// ====================
// Finish Nodes
// ====================

};

// ====================
// Connection Helper
// ====================

function connect(a,b){

  nodes[a].connections ??= [];
  nodes[b].connections ??= [];

  nodes[a].connections.push({
    node:b
  });

  nodes[b].connections.push({
    node:a
  });

}

// ====================
// Collision Checker
// ====================

function checkNodeCollisions(){

  let ids=Object.keys(nodes);

  for(let i=0;i<ids.length;i++){

    for(let j=i+1;j<ids.length;j++){

      let a=nodes[ids[i]];
      let b=nodes[ids[j]];

      let distance=Math.sqrt(
        (a.x-b.x)**2+
        (a.y-b.y)**2
      );

      if(distance<50){

        console.warn(
          "Node overlap:",
          a.name,
          "and",
          b.name,
          "Distance:",
          Math.round(distance)
        );

      }

    }

  }

}
