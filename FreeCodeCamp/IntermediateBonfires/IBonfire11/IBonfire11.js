function convert(str){
  var answer = str.replace(/&/g, "&amp;");
  answer = answer.replace(/>/g, "&gt;");
  answer = answer.replace(/</g, "&lt;");
  answer = answer.replace(/"/g, "&quot;");
  answer = answer.replace(/'/g, "&apos;");
  return answer;
}
