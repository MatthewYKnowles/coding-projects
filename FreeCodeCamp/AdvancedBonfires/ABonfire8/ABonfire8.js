function orbitalPeriod(array) {
  var answerArray = [];
  for (var i = 0; i < array.length; i++){
    answerArray.push(getOrbitalPeriodObject(array[i]));
  }
  return answerArray;
}

function getOrbitalPeriod(averageAltitude){
  var gravityMass = 398600.4418;
  var earthRadius = 6367.4447;
  var totalDistance = averageAltitude + earthRadius;
  var numerator = Math.pow(totalDistance, 3/2);
  var denominator = Math.pow(gravityMass, 1/2);
  return Math.round(Math.PI * 2 * (numerator / denominator));
}

function getOrbitalPeriodObject(object){
  var name = object["name"];
  var averageAltitude = object["avgAlt"];
  var orbitalPeriod = getOrbitalPeriod(averageAltitude);
  return {name: name, orbitalPeriod: orbitalPeriod};
}
