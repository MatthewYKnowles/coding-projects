function rot13(str){
  var answer = "";
  var i = 0;
  while (i < str.length){
    var charCode = str.charCodeAt(i);
    if (charCode < 65 || charCode > 91){
      answer += str[i];
      i++;
    }
    else if (charCode - 13 < 65){
      answer += String.fromCharCode(charCode + 13);
      i++;
    }
    else {
      answer += String.fromCharCode(charCode - 13);
      i++;
    }
  }
  return answer;
}
