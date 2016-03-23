function bouncer(arr){
  var answer = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i]){
      answer.push(arr[i]);
    }
  }
  return answer;
}
