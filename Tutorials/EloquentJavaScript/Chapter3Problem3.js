function countBs(string){
  var answer = 0;
  for (var i=0; i < string.length; i++){
    if (string.charAt(i) === "B"){
      answer += 1;
    }
  }
  return answer;
}

function countChar(string, character){
  var answer = 0;
  for (var i=0; i < string.length; i++){
    if (string.charAt(i) === character){
      answer += 1;
    }
  }
  return answer;
}
