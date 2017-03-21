
function addTogether(num) {
  if (anArgumentIsInvalid(arguments)){
    return undefined;
  }
  if(arguments.length > 1){
    return addThemUp(arguments[0], arguments[1]);
  }
  var initialAnswer = num;
  return function derp(number){
    if (argumentIsInvalid(number)){
      return undefined;
    }
      return initialAnswer + number;
    }
}

let anArgumentIsInvalid = function (arguments) {
    var invalid = false;
    for (var i in arguments) {
        if (argumentIsInvalid(arguments[i])) {
            invalid = true;
        }
    }
    return invalid;
};

function addThemUp(a, b){
  return a + b;
}

function argumentIsInvalid(passedInParameter){
  return typeof passedInParameter !== "number";
}