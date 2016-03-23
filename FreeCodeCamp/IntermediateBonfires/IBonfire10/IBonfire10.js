function unite(arr1, arr2, arr3){
  var arrayOfArrays = [];
  for (var i = 0; i < arguments.length; i++){
    arrayOfArrays.push(arguments[i]);
  }
  var brokenDownArray = arrayOfArrays.reduce(function(a,b){
    return a.concat(b);
  }, []);
  var answer = [];
  for (var i = 0; i < brokenDownArray.length; i++){
    if (answer.indexOf(brokenDownArray[i]) < 0){
      answer.push(brokenDownArray[i]);
    }
  }
  return answer;
}
