function arrayToList(array){
  var answer = null;
  for (var i = 0; i < array.length; i++){
    answer = { value: array[array.length - 1 - i], rest: answer};
  }
  return answer;
}

function listToArray(object){
  var answer = [];
  for (var node = object; node; node = node.rest)
    answer.push(node.value);
  return answer;
}

function prepend(value, list){
  return {value: value, rest: list};
}

function nth(list, number){
  if(!list)
    return undefined;
  else if (number == 0)
    return list.value;
  else
    return nth(list.rest, number -1);
}
