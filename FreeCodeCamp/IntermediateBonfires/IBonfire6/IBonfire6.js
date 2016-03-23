function translate(string){
  var firstLetter = string.slice(0,1).toLowerCase();
  var secondLetter = string.slice(1,2).toLowerCase();
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u")
    return string + "way";
  else if (secondLetter === "a" || secondLetter === "e" || secondLetter === "i" || secondLetter === "o" || secondLetter === "u")
    return string.slice(1, string.length) + firstLetter + "ay";
  else
    return string.slice(2, string.length) + firstLetter + secondLetter + "ay";
}
