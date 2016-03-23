function smallestCommons(arr) {
  var higherNumber = arr[0];
  var lowerNumber = arr[1];
  if (arr[1] > arr[0]){ higherNumber = arr[1]; lowerNumber = arr[0];}
  var arrayRange = higherNumber - lowerNumber;
  var multiple = higherNumber * lowerNumber;
  for (var i = 0; i <= arrayRange; i++){
    if (multiple % (lowerNumber + i) !== 0){
      multiple += higherNumber * lowerNumber;
      i = 0;
    }
    if (i === arrayRange){
      return multiple;
    }
  }
}
