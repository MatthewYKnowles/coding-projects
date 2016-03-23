function spinalCase(str) {
  var newString = str.replace(/ /g, "-");
  var newString = newString.replace(/_/g, "-");
  var answer = newString[0];
  for (var i = 1; i < newString.length; i++){
    if (newString[i] === newString[i].toUpperCase() && newString[i] !== "-" && newString[i-1] !== "-"){
      answer += "-" + newString[i];
    }
    else {
      answer += newString[i];
    }
  }
  return answer.toLowerCase();
}
