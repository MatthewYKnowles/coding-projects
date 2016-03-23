function sumFibs(num) {
  var answer = 2;
  var twoNumbersBack = 0;
  var oneNumberBack = 1;
  var currentNumber = 1;
  while (currentNumber < num){
    twoNumbersBack = oneNumberBack;
    oneNumberBack = currentNumber;
    currentNumber = oneNumberBack + twoNumbersBack;
    if (currentNumber % 2 === 1 && currentNumber <= num){answer += currentNumber;}
  }
  return answer;
}
