function myReplace(str, before, after){
  var sentenceArray = str.split(" ");
  var beforeIndex = sentenceArray.indexOf(before);
  if (sentenceArray[beforeIndex][0] == sentenceArray[beforeIndex][0].toUpperCase()){
    var firstLetter = after.slice(0,1);
    after = firstLetter.toUpperCase() + after.slice(1, after.length);
  }
  sentenceArray[beforeIndex] = after;
  return sentenceArray.join(" ");
}
