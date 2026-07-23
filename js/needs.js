// Player Needs System

const needs={

  bathroom:100,
  food:100,
  happiness:100,
  fatigue:100

};


function updateNeeds(minutes){

  if(!settings)
    return;


  if(settings.bathroomEnabled){
    needs.bathroom-=minutes*0.5;
  }


  if(settings.foodEnabled){
    needs.food-=minutes*0.3;
  }


  if(settings.fatigueEnabled){
    needs.fatigue-=minutes*0.4;
  }


  if(settings.happinessEnabled){

    if(needs.food<30)
      needs.happiness-=minutes*0.2;

    if(needs.fatigue<30)
      needs.happiness-=minutes*0.2;

  }


  for(let key in needs){

    if(needs[key]<0)
      needs[key]=0;

    if(needs[key]>100)
      needs[key]=100;

  }

}
