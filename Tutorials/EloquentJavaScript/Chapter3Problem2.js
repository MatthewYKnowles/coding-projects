function isEven(number){
  if (number <= 0){
    number *= number;
  }
  if (number === 1){
    return "false";
  }
  else if (number === 0){
    return "true";
  }
  else {
    number -= 2;
    return isEven(number);
  }
}
