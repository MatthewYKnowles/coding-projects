function factorialize(num) {
  answer = 1;
  while (num > 0){
    answer *= num;
    num --;
  }
  return answer;
}

factorialize(5);
