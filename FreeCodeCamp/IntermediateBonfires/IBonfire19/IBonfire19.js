function binaryAgent(str){
  var splitstring = str.split(" ");
  var answer = "";
  for (var i = 0; i < splitstring.length; i++){
    var intValueFromBinary = parseInt(splitstring[i], 2);
    answer += String.fromCharCode(intValueFromBinary);
  }
  return answer;
}
