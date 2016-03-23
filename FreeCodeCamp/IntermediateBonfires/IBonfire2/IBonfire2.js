function diff(arr1, arr2){
  var answer = [];
  var i = 0;
  while (i < arr1.length){
    if (arr2.indexOf(arr1[i]) < 0) {
      answer.push(arr1[i]);
      i++;
    }
    else {
      i++;
    }
  }
  i = 0;
  while (i < arr2.length){
    if (arr1.indexOf(arr2[i]) < 0) {
      answer.push(arr2[i]);
      i++;
    }
    else {
      i++;
    }
  }
  return answer;
}
