// ====================
// Disneyland Node Graph
// New Map Layout - Chunk 1
// ====================

const nodes={
  ...junctionNodes,
  ...rideNodes,
  ...foodNodes
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
connect("fantasylandEast","smallWorldJunction");
connect("fantasylandEast","matterhornNorth");
connect("matterhornSouth","matterhornNorth");
connect("matterhornSouth","tomorrowlandEntrance");
connect("matterhornNorth","smallWorldJunction");
connect("matterhornSouth","hub");

// ====================
// Tomorrowland
// ====================

connect("hub","tomorrowlandEntrance");
connect("tomorrowlandEntrance","tomorrowland");
connect("tomorrowland","tomorrowlandNorth");
connect("tomorrowlandNorth","matterhornSouth");

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
connect("frontierHub","southFrontierland");
connect("newOrleansSquare","southFrontierland");

// ====================
// Galaxy's Edge
// ====================

connect("galaxysEdgeWest","galaxysEdgeHub");
connect("galaxysEdgeHub","galaxysEdgeEast");
connect("galaxysEdgeEast","fantasylandWest");

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
connect("tomorrowlandEntrance","starTours");
connect("tomorrowland","buzzLightyear");
connect("tomorrowland","autopia");
connect("tomorrowland","submarine");
connect("tomorrowlandNorth","submarine");
connect("tomorrowlandEntrance","buzzLightyear");

// Fantasyland
connect("matterhornNorth","matterhorn");
connect("fantasylandHub","peterPan");
connect("fantasyland","peterPan");
connect("fantasylandHub","mrToad");
connect("fantasylandEast","mrToad");
connect("fantasylandWest","pinocchio");
connect("fantasylandHub","pinocchio");
connect("matterhornNorth","alice");
connect("smallWorldJunction","smallWorld");
connect("fantasylandHub","dumbo");
connect("fantasyland","snowWhite");
connect("fantasylandHub","snowWhite");
connect("fantasylandWest","caseyJr");
connect("smallWorldJunction","storybookBoats");
connect("fantasylandEast","storybookBoats");
connect("fantasylandHub","madTeaParty");
connect("fantasylandEast","madTeaParty");

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
connect("galaxysEdgeWest","riseResistance");
connect("galaxysEdgeHub","smugglersRun");
connect("galaxysEdgeEast","smugglersRun");

// Toontown

connect("toonTownHub","gadgetCoaster");
connect("toonTownHub","runawayRailway");
connect("toonTown","rogerRabbit");

// ====================
// Restaurant Connects
// ====================

connect("jollyHoliday","mainStreet");
connect("jollyHoliday","adventurelandEntrance");

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
