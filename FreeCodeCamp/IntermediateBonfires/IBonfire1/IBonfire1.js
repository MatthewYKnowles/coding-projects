function sumAll(arr){
  var arrayValue1 = Math.min(...arr);
  var arrayValue2 = Math.max(...arr);
  var fullArray = [];
  while (arrayValue1 <= arrayValue2){
    fullArray.push(arrayValue1);
    arrayValue1++;
  }
  var answer = 0;
  for (var i = 0; i < fullArray.length; i++){
    answer += fullArray[i];
  }
  return answer;
}
