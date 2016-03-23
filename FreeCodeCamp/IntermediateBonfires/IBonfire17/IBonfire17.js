function drop(arr, func) {
  var filteredArray = arr.filter(func);
  while (arr.length !== 0){
    if (arr[0] === filteredArray[0]){
      return arr;
    }
    else {
      arr.shift();
    }
  }
  return [];
}
