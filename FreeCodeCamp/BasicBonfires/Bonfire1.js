function reverseString(str) {
  var answer = '';
  var strFinalIndex = str.length - 1;
  while (strFinalIndex >= 0){
    answer += str[strFinalIndex];
    strFinalIndex --;
  }
  return answer;
}

reverseString("hello");
