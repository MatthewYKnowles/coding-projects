function pairwise(array, argument) {
  var currentSecondIndex = 1;
  var answer = 0;
  for (var i = 0; i < array.length-1; i++){
    for(var j = currentSecondIndex; j < array.length; j++){
        if (array[i] + array[j] == argument){answer += i+j;}
        console.log(array[i] + " array i");
        console.log(array[j] + " array j");
      //  console.log(answer + " answer");
    }
    currentSecondIndex++;
  }
  return answer;
}
