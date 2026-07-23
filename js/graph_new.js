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
  },


  mainStreet:{
    id:"mainStreet",
    name:"Main Street USA",
    type:"junction",
    land:"Main Street",
    x:1700,
    y:2000,
    showLabel:true,
  },


  hub:{
    id:"hub",
    name:"Central Hub",
    type:"junction",
    land:"Hub",
    x:1700,
    y:1600,
    showLabel:true,
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
  },


  fantasylandHub:{
    id:"fantasylandHub",
    name:"Fantasyland Hub",
    type:"junction",
    land:"Fantasyland",
    x:1700,
    y:1050,
    showLabel:true,
  },


  fantasylandWest:{
    id:"fantasylandWest",
    name:"Fantasyland West",
    type:"junction",
    land:"Fantasyland",
    x:1550,
    y:1050,
    showLabel:true,
  },


  fantasylandEast:{
    id:"fantasylandEast",
    name:"Fantasyland East",
    type:"junction",
    land:"Fantasyland",
    x:1900,
    y:1050,
    showLabel:true,
  },


  matterhornSouth:{
    id:"matterhornSouth",
    name:"Matterhorn Junction South",
    type:"junction",
    land:"Fantasyland",
    x:1900,
    y:1400,
    showLabel:true,
  },


  matterhornNorth:{
    id:"matterhornNorth",
    name:"Matterhorn Junction North",
    type:"junction",
    land:"Fantasyland",
    x:2000,
    y:1100,
    showLabel:true,
  },


  smallWorldJunction:{
    id:"smallWorldJunction",
    name:"Small World Junction",
    type:"junction",
    land:"Fantasyland",
    x:2000,
    y:850,
    showLabel:true,
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
  },


  tomorrowland:{
    id:"tomorrowland",
    name:"Tomorrowland Center",
    type:"junction",
    land:"Tomorrowland",
    x:2300,
    y:1650,
    showLabel:true,
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
  },


  adventurelandHub:{
    id:"adventurelandHub",
    name:"Adventureland Hub",
    type:"junction",
    land:"Adventureland",
    x:1340,
    y:1900,
    showLabel:true,
  },


  newOrleansSquare:{
    id:"newOrleansSquare",
    name:"New Orleans Square",
    type:"junction",
    land:"New Orleans Square",
    x:1050,
    y:1900,
    showLabel:true,
  },


  nosHub:{
    id:"nosHub",
    name:"New Orleans Square Hub",
    type:"junction",
    land:"New Orleans Square",
    x:850,
    y:1900,
    showLabel:true,
  },


  bayouCountry:{
    id:"bayouCountry",
    name:"Bayou Country Entrance",
    type:"junction",
    land:"Bayou Country",
    x:600,
    y:1500,
    showLabel:true,
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
  },


  frontierHub:{
    id:"frontierHub",
    name:"Frontierland Hub",
    type:"junction",
    land:"Frontierland",
    x:1150,
    y:1480,
    showLabel:true,
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
  },


  galaxysEdgeHub:{
    id:"galaxysEdgeHub",
    name:"Galaxy's Edge Hub",
    type:"junction",
    land:"Galaxy's Edge",
    x:650,
    y:800,
    showLabel:true,
  },


  galaxysEdgeEast:{
    id:"galaxysEdgeEast",
    name:"Galaxy's Edge East Entrance",
    type:"junction",
    land:"Galaxy's Edge",
    x:1000,
    y:1000,
    showLabel:true,
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
  },


  toonTownHub:{
    id:"toonTownHub",
    name:"Toontown Hub",
    type:"junction",
    land:"Toontown",
    x:1770,
    y:350,
    showLabel:true,
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
},


starTours:{
  id:"starTours",
  name:"Star Tours",
  type:"ride",
  land:"Tomorrowland",
  x:2500,
  y:1350,
},


buzzLightyear:{
  id:"buzzLightyear",
  name:"Buzz Lightyear Astro Blasters",
  type:"ride",
  land:"Tomorrowland",
  x:2400,
  y:1600,
},


autopia:{
  id:"autopia",
  name:"Autopia",
  type:"ride",
  land:"Tomorrowland",
  x:2600,
  y:1700,
},


submarine:{
  id:"submarine",
  name:"Finding Nemo Submarine Voyage",
  type:"ride",
  land:"Tomorrowland",
  x:2100,
  y:1450,
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
},


peterPan:{
  id:"peterPan",
  name:"Peter Pan's Flight",
  type:"ride",
  land:"Fantasyland",
  x:1500,
  y:950,
},


mrToad:{
  id:"mrToad",
  name:"Mr. Toad's Wild Ride",
  type:"ride",
  land:"Fantasyland",
  x:1550,
  y:1150,
},


pinocchio:{
  id:"pinocchio",
  name:"Pinocchio's Daring Journey",
  type:"ride",
  land:"Fantasyland",
  x:1600,
  y:1000,
},


alice:{
  id:"alice",
  name:"Alice in Wonderland",
  type:"ride",
  land:"Fantasyland",
  x:2000,
  y:1200,
},


smallWorld:{
  id:"smallWorld",
  name:"it's a small world",
  type:"ride",
  land:"Fantasyland",
  x:2100,
  y:800,
},


dumbo:{
  id:"dumbo",
  name:"Dumbo the Flying Elephant",
  type:"ride",
  land:"Fantasyland",
  x:1800,
  y:1200,
},


// ====================
// Adventureland / Frontierland / NOS Square / Bayou Country
// ====================

indianaJones:{
  id:"indianaJones",
  name:"Indiana Jones Adventure",
  type:"ride",
  land:"Adventureland",
  x:1100,
  y:2100,
},


bigThunder:{
  id:"bigThunder",
  name:"Big Thunder Mountain",
  type:"ride",
  land:"Frontierland",
  x:1150,
  y:1350,
},

jungleCruise:{
  id:"jungleCruise",
  name:"Jungle Cruise",
  type:"ride",
  land:"Adventureland",
  x:1400,
  y:2000,
  showLabel:true
},

pirates:{
  id:"pirates",
  name:"Pirates of the Caribbean",
  type:"ride",
  land:"New Orleans Square",
  x:1100,
  y:1990,
  showLabel:true
},

hauntedMansion:{
  id:"hauntedMansion",
  name:"Haunted Mansion",
  type:"ride",
  land:"New Orleans Square",
  x:650,
  y:1800,
  showLabel:true
},

tianas:{
  id:"tianas",
  name:"Tiana's Bayou Adventure",
  type:"ride",
  land:"Bayou Country",
  x:500,
  y:1600,
  showLabel:true
},

winniePooh:{
  id:"winniePooh",
  name:"The Many Adventures of Winnie the Pooh",
  type:"ride",
  land:"Bayou Country",
  x:310,
  y:1500,
  showLabel:true
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
  if(!nodes[a]){
    console.error("Missing node:",a);
    return;
  }
  if(!nodes[b]){
    console.error("Missing node:",b);
    return;
  }
  nodes[a].connections ??= [];
  nodes[b].connections ??= [];
  nodes[a].connections.push({node:b});
  nodes[b].connections.push({node:a});
}

// ====================
// Graph Connections
// ====================

// ====================
// Main Park Spine
// ====================

connect("entrance","mainStreet");
connect("mainStreet","hub");

// ====================
// Fantasyland
// ====================

connect("hub","fantasyland");
connect("fantasyland","fantasylandHub");
connect("fantasylandHub","fantasylandWest");
connect("fantasylandHub","fantasylandEast");
connect("fantasylandHub","matterhornSouth");
connect("fantasylandEast","smallWorldJunction");
connect("fantasylandEast","matterhornNorth");
connect("matterhornSouth","matterhornNorth");
connect("matterhornSouth","tomorrowlandEntrance");
connect("matterhornNorth","smallWorldJunction");

// ====================
// Tomorrowland
// ====================

connect("hub","tomorrowlandEntrance");
connect("tomorrowlandEntrance","tomorrowland");

// ====================
// Adventureland / New Orleans Square
// ====================

connect("hub","adventureland");
connect("adventureland","adventurelandHub");
connect("adventureland","frontierlandEntrance");
connect("adventurelandHub","newOrleansSquare");
connect("newOrleansSquare","nosHub");
connect("nosHub","bayouCountry");
connect("bayouCountry","galaxysEdgeWest");

// ====================
// Frontierland
// ====================

connect("hub","frontierlandEntrance");
connect("frontierlandEntrance","frontierHub");
connect("frontierHub","galaxysEdgeEast");

// ====================
// Galaxy's Edge
// ====================

connect("galaxysEdgeWest","galaxysEdgeHub");
connect("galaxysEdgeHub","galaxysEdgeEast");

// ====================
// Toontown
// ====================

connect("smallWorldJunction","toonTown");
connect("toonTown","toonTownHub");

// ====================
// Ride Connections
// ====================

// Tomorrowland
connect("tomorrowland","spaceMountain");
connect("tomorrowland","starTours");
connect("tomorrowland","buzzLightyear");
connect("tomorrowland","autopia");
connect("tomorrowlandEntrance","submarine");

// Fantasyland
connect("matterhornNorth","matterhorn");
connect("fantasylandWest","peterPan");
connect("fantasylandWest","mrToad");
connect("fantasylandWest","pinocchio");
connect("matterhornNorth","alice");
connect("smallWorldJunction","smallWorld");
connect("fantasylandEast","dumbo");

// Adventureland / Frontierland / NOS Square
connect("adventurelandHub","indianaJones");
connect("frontierHub","bigThunder");
connect("adventurelandHub","jungleCruise");
connect("nosHub","hauntedMansion");
connect("newOrleansSquare","pirates");
connect("bayouCountry","tianas");
connect("bayouCountry","winniePooh");

// Galaxy's Edge
connect("galaxysEdgeHub","riseResistance");

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
