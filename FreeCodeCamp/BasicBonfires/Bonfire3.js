function reverseString(str) {
  var answer = '';
  var strFinalIndex = str.length - 1;
  while (strFinalIndex >= 0){
    answer += str[strFinalIndex];
    strFinalIndex --;
  }
  return answer;
}
function removePunctuation(str){
  var answer = str.replace(/ /gi, "");
  answer = answer.replace(/,/gi, "");
  answer = answer.replace(/\./gi, "");
  answer = answer.replace(/_/gi, "");
  answer = answer.replace(/-/gi, "");
  answer = answer.replace(/:/gi, "");
  answer = answer.replace(/\)/gi, "");
  answer = answer.replace(/\(/gi, "");
  return answer;
}

function palindrome(str) {
  var reversedLoweredString = reverseString(str).toLowerCase();
  if (removePunctuation(str.toLowerCase()) === removePunctuation(reversedLoweredString)){
    return true;
}else {
    return false;
  }
}
