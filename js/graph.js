// ====================
// Disneyland Node Graph
// ====================

const nodes = {

  entrance: {
    id: "entrance",
    name: "Park Entrance",
    type: "junction",
    x: 100,
    y: 300,

    connections: [
      { node: "mainStreet", time: 2 }
    ]
  },

  mainStreet: {
    id: "mainStreet",
    name: "Main Street USA",
    type: "junction",
    x: 250,
    y: 300,

    connections: [
      { node: "entrance", time: 2 },
      { node: "hub", time: 3 }
    ]
  },

  hub: {
    id: "hub",
    name: "Central Hub",
    type: "junction",
    x: 450,
    y: 300,

    connections: [
      { node: "mainStreet", time: 3 },
      { node: "fantasyland", time: 2 },
      { node: "tomorrowland", time: 3 },
      { node: "adventureland", time: 3 },
      { node: "frontierland", time: 3 }
    ]
  },

  fantasyland: {
    id: "fantasyland",
    name: "Fantasyland",
    type: "land",
    x: 600,
    y: 150,

    connections: [
      { node: "hub", time: 2 },
      { node: "peterPan", time: 1 },
      { node: "matterhorn", time: 3 }
    ]
  },

  tomorrowland: {
    id: "tomorrowland",
    name: "Tomorrowland",
    type: "land",
    x: 650,
    y: 450,

    connections: [
      { node: "hub", time: 3 },
      { node: "spaceMountain", time: 2 }
    ]
  },

  adventureland: {
    id: "adventureland",
    name: "Adventureland",
    type: "land",
    x: 250,
    y: 500,

    connections: [
      { node: "hub", time: 3 },
      { node: "indianaJones", time: 2 }
    ]
  },

  frontierland: {
    id: "frontierland",
    name: "Frontierland",
    type: "land",
    x: 450,
    y: 550,

    connections: [
      { node: "hub", time: 3 },
      { node: "bigThunder", time: 2 }
    ]
  },

  galaxysEdge: {
    id: "galaxysEdge",
    name: "Galaxy's Edge",
    type: "land",
    x: 650,
    y: 650,

    connections: [
      { node: "frontierland", time: 3 },
      { node: "rise", time: 2 }
    ]
  },


  // ====================
  // Ride Nodes
  // ====================

  peterPan: {
    id: "peterPan",
    name: "Peter Pan's Flight",
    type: "ride",
    x: 750,
    y: 100,

    connections: [
      { node: "fantasyland", time: 1 }
    ]
  },

  matterhorn: {
    id: "matterhorn",
    name: "Matterhorn Bobsleds",
    type: "ride",
    x: 850,
    y: 180,

    connections: [
      { node: "fantasyland", time: 3 }
    ]
  },

  spaceMountain: {
    id: "spaceMountain",
    name: "Space Mountain",
    type: "ride",
    x: 850,
    y: 450,

    connections: [
      { node: "tomorrowland", time: 2 }
    ]
  },

  indianaJones: {
    id: "indianaJones",
    name: "Indiana Jones Adventure",
    type: "ride",
    x: 100,
    y: 550,

    connections: [
      { node: "adventureland", time: 2 }
    ]
  },

  bigThunder: {
    id: "bigThunder",
    name: "Big Thunder Mountain",
    type: "ride",
    x: 550,
    y: 650,

    connections: [
      { node: "frontierland", time: 2 }
    ]
  },

  rise: {
    id: "rise",
    name: "Rise of the Resistance",
    type: "ride",
    x: 850,
    y: 700,

    connections: [
      { node: "galaxysEdge", time: 2 }
    ]
  }

};
