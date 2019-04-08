// Code your solution in this file!

function distanceFromHqInBlocks (numberedStreet) {
  if  (numberedStreet > 42) {  
    return numberedStreet - 42 
  } 
  if (numberedStreet < 42){  
    return 42 - numberedStreet }
}

 function distanceFromHqInFeet (numberedStreet){
   return distanceFromHqInBlocks(numberedStreet) * 264;
}

function distanceTravelledInFeet (start, destination){
    if (start < destination) {
    return (destination - start) * 264;
    } else {
    return (start - destination) * 264;
    }
}


