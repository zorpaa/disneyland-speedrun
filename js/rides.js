// Ride Database
const crowdMultiplier=Number(sessionStorage.getItem("crowdMultiplier"))||1;
const rides={

spaceMountain:{
  name:"Space Mountain",
  maxWait:90,
  popularity:1.20,
  duration:5,
  currentWait:5,
  completed:false
},

matterhorn:{
  name:"Matterhorn Bobsleds",
  maxWait:60,
  popularity:0.85,
  duration:4,
  currentWait:5,
  completed:false
},

indianaJones:{
  name:"Indiana Jones Adventure",
  maxWait:90,
  popularity:1.15,
  duration:5,
  currentWait:5,
  completed:false
},

bigThunder:{
  name:"Big Thunder Mountain",
  maxWait:70,
  popularity:0.95,
  duration:4,
  currentWait:5,
  completed:false
},

riseResistance:{
  name:"Rise of the Resistance",
  maxWait:120,
  popularity:1.35,
  duration:18,
  currentWait:10,
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

  peterPan:{
  name:"Peter Pan's Flight",
  maxWait:90,
  popularity:1.35,
  duration:3,
  completed:false,
  currentWait:0
},

alice:{
  name:"Alice in Wonderland",
  maxWait:45,
  popularity:0.8,
  duration:4,
  completed:false,
  currentWait:0
},

mrToad:{
  name:"Mr. Toad's Wild Ride",
  maxWait:35,
  popularity:0.7,
  duration:3,
  completed:false,
  currentWait:0
},
  
};
