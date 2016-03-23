function repeat(str, num){
  var answer = "";
  if (num > 0){
    while (num > 0){
      answer += str;
      num--;
    }
  return answer;
} else {
  return "";
}
}
