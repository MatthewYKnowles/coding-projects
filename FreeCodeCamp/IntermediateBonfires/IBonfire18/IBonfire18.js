function steamroller(arr) {
  var notFlattened = true;
  var answer = arr.reduce(function(a,b){
    return a.concat(b);
  }, []);
  while(notFlattened){
    answer = answer.reduce(function(a,b){
      return a.concat(b);
    }, []);
    var count = 0;
    for (var i = 0; i < answer.length; i++){
      if (Array.isArray(answer[i]) === false){
        count += 1;
      }
    }
    if (count === answer.length){ notFlattened = false;}
  }
  return answer;
}
