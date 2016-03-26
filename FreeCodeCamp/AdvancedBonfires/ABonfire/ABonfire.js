function countryCodeEqualsZero(numbersOnly) {
  return numbersOnly[0] == 1;
}
function telephoneCheck(str) {
  var numbersOnly = str.replace(/-|\s/g, "");
  if (str[0] === "-") {return false;}
  if (numbersOnly.length === 13 && countryCodeEqualsZero(numbersOnly) && numbersOnly[1] == "(" && numbersOnly[5] == ")") {return true;}
  if (numbersOnly.length === 12 && numbersOnly[0] == "(" && numbersOnly[4] == ")") {return true;}
  if (numbersOnly.length === 11 && numbersOnly[0] == 1) {return true;}
  if (numbersOnly.length === 10) {return true;}
  else {return false;}
}