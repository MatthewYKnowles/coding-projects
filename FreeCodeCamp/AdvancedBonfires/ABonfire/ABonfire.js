function telephoneCheck(str) {
  var numbersOnly = str.replace(/-|\s/g, "");
  if (numbersOnly.length === 13 && numbersOnly[0] == 1 && numbersOnly[1] == "(" && numbersOnly[5] == ")") {return true;}
  if (numbersOnly.length === 11 && numbersOnly[0] == 1) {return true;}
  if (numbersOnly.length === 10) {return true;}
  else {
    return false;
  }
}