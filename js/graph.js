// ====================
// Disneyland Node Graph
// ====================


const nodes = {

  entrance: {
    id: "entrance",
    name: "Main Entrance",
    type: "junction",
    x: 100,
    y: 350,
    connections: [
      { node: "mainStreet" }
    ]
  },


  mainStreet: {
    id: "mainStreet",
    name: "Main Street USA",
    type: "junction",
    x: 250,
    y: 350,
    connections: [
      { node: "entrance" },
      { node: "hub" }
    ]
  },


  hub: {
    id: "hub",
    name: "Central Hub",
    type: "junction",
    x: 400,
    y: 350,
    connections: [
      { node: "mainStreet" },
      { node: "tomorrowland" },
      { node: "fantasyland" },
      { node: "adventureland" },
      { node: "frontierland" },
      { node: "galaxysEdge" }
    ]
  },


  tomorrowland: {
    id: "tomorrowland",
    name: "Tomorrowland",
    type: "junction",
    x: 550,
    y: 200,
    connections: [
      { node: "hub" },
      { node: "spaceMountain" }
    ]
  },


  fantasyland: {
    id: "fantasyland",
    name: "Fantasyland",
    type: "junction",
    x: 550,
    y: 350,
    connections: [
      { node: "hub" },
      { node: "matterhorn" }
    ]
  },


  adventureland: {
    id: "adventureland",
    name: "Adventureland",
    type: "junction",
    x: 550,
    y: 500,
    connections: [
      { node: "hub" },
      { node: "indianaJones" }
    ]
  },


  frontierland: {
    id: "frontierland",
    name: "Frontierland",
    type: "junction",
    x: 700,
    y: 500,
    connections: [
      { node: "hub" },
      { node: "bigThunder" }
    ]
  },


  galaxysEdge: {
    id: "galaxysEdge",
    name: "Galaxy's Edge",
    type: "junction",
    x: 700,
    y: 250,
    connections: [
      { node: "hub" },
      { node: "riseResistance" }
    ]
  },


  // ====================
  // Rides
  // ====================


  spaceMountain: {
    id: "spaceMountain",
    name: "Space Mountain",
    type: "ride",
    x: 650,
    y: 150,
    connections: [
      { node: "tomorrowland" }
    ]
  },


  matterhorn: {
    id: "matterhorn",
    name: "Matterhorn Bobsleds",
    type: "ride",
    x: 650,
    y: 350,
    connections: [
      { node: "fantasyland" }
    ]
  },


  indianaJones: {
    id: "indianaJones",
    name: "Indiana Jones Adventure",
    type: "ride",
    x: 650,
    y: 550,
    connections: [
      { node: "adventureland" }
    ]
  },


  bigThunder: {
    id: "bigThunder",
    name: "Big Thunder Mountain",
    type: "ride",
    x: 800,
    y: 500,
    connections: [
      { node: "frontierland" }
    ]
  },


  riseResistance: {
    id: "riseResistance",
    name: "Rise of the Resistance",
    type: "ride",
    x: 850,
    y: 250,
    connections: [
      { node: "galaxysEdge" }
    ]
  }

};
