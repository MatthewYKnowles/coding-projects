function pairwise(array, argument) {
  var currentSecondIndex = 1;
  var alreadyUsedIndexes = []
  var answer = 0;
  for (var i = 0; i < array.length-1; i++){
    for(var j = currentSecondIndex; j < array.length; j++){
        if (array[i] + array[j] == argument && notInArray(i, j, alreadyUsedIndexes)){
          answer += i+j;
          alreadyUsedIndexes.push(i);
          alreadyUsedIndexes.push(j);
        }
    }
    currentSecondIndex++;
  }
  return answer;
}
function notInArray(numberOne, numberTwo, alreadyUsedIndexes){
  var numberOneInArray = alreadyUsedIndexes.indexOf(numberOne) == -1;
  var numberTwoInArray = alreadyUsedIndexes.indexOf(numberTwo) == -1;
  return (numberOneInArray && numberTwoInArray);
}
