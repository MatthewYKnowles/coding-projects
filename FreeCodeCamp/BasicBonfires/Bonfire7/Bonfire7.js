function end(string, target){
  var stringLength = string.length;
  var startingIndex = stringLength - target.length;
  var endOfStringWithTheLengthOfTarget = string.substr(startingIndex, stringLength);
  if (endOfStringWithTheLengthOfTarget === target){
    return true;
  } else {
    return false;
  }

}
