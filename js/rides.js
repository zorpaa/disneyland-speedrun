// Ride Database

const crowdMultiplier=Number(sessionStorage.getItem("crowdMultiplier"))||1;
const rides={

// ====================
// Tomorrowland
// ====================

spaceMountain:{
  name:"Space Mountain",
  maxWait:90,
  popularity:1.20,
  duration:5,
  currentWait:5,
  completed:false
},

starTours:{
  name:"Star Tours",
  maxWait:45,
  popularity:0.8,
  duration:7,
  currentWait:0,
  completed:false
},

buzzLightyear:{
  name:"Buzz Lightyear Astro Blasters",
  maxWait:35,
  popularity:0.75,
  duration:5,
  currentWait:0,
  completed:false
},

autopia:{
  name:"Autopia",
  maxWait:30,
  popularity:0.5,
  duration:5,
  currentWait:0,
  completed:false
},

submarine:{
  name:"Finding Nemo Submarine Voyage",
  maxWait:40,
  popularity:0.65,
  duration:12,
  currentWait:10,
  completed:false
},


// ====================
// Fantasyland
// ====================

matterhorn:{
  name:"Matterhorn Bobsleds",
  maxWait:60,
  popularity:0.85,
  duration:4,
  currentWait:5,
  completed:false
},

peterPan:{
  name:"Peter Pan's Flight",
  maxWait:90,
  popularity:1.35,
  duration:3,
  currentWait:0,
  completed:false
},

alice:{
  name:"Alice in Wonderland",
  maxWait:45,
  popularity:0.8,
  duration:4,
  currentWait:0,
  completed:false
},

mrToad:{
  name:"Mr. Toad's Wild Ride",
  maxWait:35,
  popularity:0.7,
  duration:3,
  currentWait:0,
  completed:false
},

pinocchio:{
  name:"Pinocchio's Daring Journey",
  maxWait:45,
  popularity:0.9,
  duration:3,
  currentWait:0,
  completed:false
},

smallWorld:{
  name:"it's a small world",
  maxWait:40,
  popularity:0.75,
  duration:12,
  currentWait:0,
  completed:false
},

dumbo:{
  name:"Dumbo the Flying Elephant",
  maxWait:60,
  popularity:1.2,
  duration:2,
  currentWait:0,
  completed:false
},


// ====================
// Adventureland
// ====================

indianaJones:{
  name:"Indiana Jones Adventure",
  maxWait:90,
  popularity:1.15,
  duration:5,
  currentWait:5,
  completed:false
},

jungleCruise:{
  name:"Jungle Cruise",
  maxWait:60,
  popularity:0.95,
  duration:10,
  completed:false,
  currentWait:0
},

// ====================
// Frontierland
// ====================

bigThunder:{
  name:"Big Thunder Mountain",
  maxWait:70,
  popularity:0.95,
  duration:4,
  currentWait:5,
  completed:false
},


// ====================
// Galaxy's Edge
// ====================

riseResistance:{
  name:"Rise of the Resistance",
  maxWait:120,
  popularity:1.35,
  duration:18,
  currentWait:10,
  completed:false
},


// ====================
// New Orleans Square / Bayou Country
// ====================

pirates:{
  name:"Pirates of the Caribbean",
  maxWait:45,
  popularity:1.0,
  duration:15,
  completed:false,
  currentWait:0
},

hauntedMansion:{
  name:"Haunted Mansion",
  maxWait:45,
  popularity:1.0,
  duration:9,
  completed:false,
  currentWait:0
},

tianas:{
  name:"Tiana's Bayou Adventure",
  maxWait:120,
  popularity:1.25,
  duration:10,
  completed:false,
  currentWait:0
},


winniePooh:{
  name:"The Many Adventures of Winnie the Pooh",
  maxWait:35,
  popularity:0.7,
  duration:5,
  completed:false,
  currentWait:0
},
  
// Future:
// pirates
// hauntedMansion
// tiana


};
