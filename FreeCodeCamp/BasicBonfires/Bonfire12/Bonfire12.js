function mutation(arr){
  var firstString = arr[0].toLowerCase();
  var testString = arr[1].toLowerCase();
  var testStringLength = testString.length;
  var i = 0;
  if (firstString === testString){
    return true;
  }
  while (testStringLength > 0){
    if (firstString.indexOf(testString.substring(i,i+1)) >= 0){
      testStringLength--;
      i++;
    }
    else {
      return false;
    }
  }
  return true;
}
