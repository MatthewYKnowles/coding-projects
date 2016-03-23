function where(arr, num){
  var sortedArray = arr.sort(function(a,b){
    return a - b;
  });
  var i = 0;
  while (i < arr.length) {
    if (sortedArray[i] < num){
      i++;
    }
    else {
      return i;
    }
  }
  return arr.length;
}
