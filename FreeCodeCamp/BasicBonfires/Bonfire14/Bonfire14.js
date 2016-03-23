function destroyer(arr){
  var passedInArguments = [];
  var i = 0;
  while (i < arguments.length){
    passedInArguments.push(arguments[i]);
    i++;
  }
  var answerArray = passedInArguments[0];
  function toBeDestroyed(value){
    return value != passedInArguments[1];
  }
  var answer = answerArray.filter(toBeDestroyed);
  function toBeDestroyed2(value){
    return value != passedInArguments[2];
  }
  var answer = answer.filter(toBeDestroyed2);
  function toBeDestroyed3(value){
    return value != passedInArguments[3];
  }
  var answer = answer.filter(toBeDestroyed3);
  return answer;
}
