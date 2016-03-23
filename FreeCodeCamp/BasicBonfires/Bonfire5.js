function titleCase(str) {
  var arrayOfWords = str.split(" ")
  var answer = ""
  var i = 0
  while (i < arrayOfWords.length){
    var CurrentWord = arrayOfWords[i];
    answer += CurrentWord.charAt(0).toUpperCase();
    answer += CurrentWord.slice(1, CurrentWord.length).toLowerCase() + " ";
    i++;
  }
  answer = answer.slice(0, answer.length - 1);
  return answer;
}
