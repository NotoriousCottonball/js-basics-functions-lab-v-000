// Code your solution in this file!

function distanceFromHqInBlocks (numberedStreet) {
  if  (numberedStreet > 42) {  
    return numberedStreet - 42 
  } 
  if (numberedStreet < 42){  
    return 42 - numberedStreet }
}

 function distanceFromHqInFeet (blockNumber){
   return distanceFromHqInBlocks(blockNumber) * 264;
}


