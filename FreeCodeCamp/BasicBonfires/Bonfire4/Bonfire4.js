function findLongestWord(str){
  var arrayOfWords = str.split(" ");
  var longestWordLength = 0;
  var currentWord = "";
  var i = 0;
  while (i < arrayOfWords.length){
    currentWord = arrayOfWords[i];
    if (longestWordLength < currentWord.length){
      longestWordLength = currentWord.length;
      i++;
    } else{
      i++;
    }
  }
  return longestWordLength;
}
