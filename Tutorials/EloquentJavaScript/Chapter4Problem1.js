function range(firstNumber, lastNumber, countBy){
  if (countBy == null) countBy = 1;
  var answer = [];
  if (countBy < 0){
    for (var i = 0; i >= lastNumber - firstNumber; i+= countBy){
      answer.push(firstNumber + i);
    }
  }
  else {
    for (var i = 0; i <= lastNumber - firstNumber; i+= countBy){
      answer.push(firstNumber + i);
    }
  }
  return answer;
}

function sum(array){
  answer = 0;
  for (var i = 0; i < array.length; i++){
    answer += array[i];
  }
  return answer;
}
