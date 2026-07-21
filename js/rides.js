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
}

};
