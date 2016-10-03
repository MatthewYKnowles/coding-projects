function reverseArray(array){
  var newArray = [];
  for (var i = 1; i <= array.length; i++){
    newArray.push(array[array.length - i]);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  var newArray = []
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++){
    var poppedItem = array.pop();
    newArray.push(poppedItem);
  }
  var newArrayLength = newArray.length;
  for (var i = 0; i <newArrayLength; i++){
    var shiftedItem = newArray.shift();
    array.push(shiftedItem);
  }
}
