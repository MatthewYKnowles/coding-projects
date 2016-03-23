function largestOfFour(arr) {
  var answer = [0, 0, 0, 0];
  var i = 0;
  while (i < arr.length){
    var currentArray = arr[i];
    var j = 0;
    while (j < currentArray.length){
      if (answer[i] < currentArray[j]){
        answer[i] = currentArray[j];
        j++;
    }
      else {
        j++;
    }
    }
    i++;
  }
  return answer;
}
