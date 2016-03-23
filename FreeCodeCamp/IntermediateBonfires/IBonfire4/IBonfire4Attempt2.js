function where(collection, source){
  var answer =[];
  for (var object in collection[0]){
    var i = 0;
    for (var prop in collection[0][i]){
      if (prop === Object.keys(source)[i] && collection[0][i].prop === source[Object.keys(source)[i]]){
        answer.push(collection[0]);
        i++;
      }
      else {
        i++;
      }
    }
  }
  return answer;
}
