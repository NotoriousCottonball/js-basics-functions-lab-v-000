// Code your solution in this file!

function distanceFromHqInBlocks (streetNumber) {
  if  (streetNumber > 42) {  
    return streetNumber - 42 
  } 
  if (streetNumber < 42){  
    return 42 - streetNumber }
}


function distanceFromHqInFeet (blockNumber){
   return distanceFromHqInBlocks(blockNumber) * 264;
}

