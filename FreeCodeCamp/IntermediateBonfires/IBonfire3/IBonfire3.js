function convert(number){
  var answer = "";
  while (number >= 1000){ answer += "M"; number -= 1000;}
  if (number >= 900){ answer += "CM"; number -= 900;}
  if (number >= 500){ answer += "D"; number -= 500;}
  if (number >= 400){ answer += "CD"; number -= 400;}
  while (number >= 100){ answer += "C"; number -= 100;}
  if (number >= 90){ answer += "XC"; number -= 90;}
  if (number >= 50){ answer += "L"; number -= 50;}
  if (number >= 40){ answer += "XL"; number -= 40;}
  while (number >= 10){ answer += "X"; number -= 10;}
  if (number >= 9){ answer += "IX"; number -= 9;}
  if (number >= 5){ answer += "V"; number -= 5;}
  if (number >= 4){ answer += "IV"; number -= 4;}
  while (number >= 1){ answer += "I"; number--;}
  return answer;
}
