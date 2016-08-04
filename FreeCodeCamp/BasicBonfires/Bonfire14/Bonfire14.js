function destroyer(arr){
  var passedInArguments = [];
  for (var i = 0; i < arguments.length; i++){
    passedInArguments.push(arguments[i]);
  }

  var answerArray = arguments[0];

  for (let i = 1; i < arguments.length; i++){
    function toBeDestroyed(value){
      return value != passedInArguments[i];
    }
    answerArray = answerArray.filter(toBeDestroyed);
  }

  return answerArray;
}
