function truncate(str, num){
  if (num <= 0){
    return "...";
} else if (num >= str.length){
    return str;
} else if (num <= 3){
      return str.slice(0 , num) + "...";
} else {
  var numberMinusThree = num - 3;
  return str.slice(0 , numberMinusThree) + "...";
  }
}
