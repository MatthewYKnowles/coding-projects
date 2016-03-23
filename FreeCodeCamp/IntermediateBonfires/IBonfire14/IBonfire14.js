function sumPrimes(num) {
  var startingNumber = num;
  var answer = 2;
  while (startingNumber > 2){
    for (var i = startingNumber - 1; i >= 2; i--){
      if (startingNumber % i === 0){
        startingNumber--;
        i = 1;
      }
      if (i === 2) {
        answer += startingNumber;
        startingNumber--;
      }
    }
  }
  return answer;
}
