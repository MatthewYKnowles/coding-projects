function fearNotLetter(str){
  var alphabet = "abcdefghijklmnopqrstuv"
  if (str.slice(0,1) !== "a")
    return undefined;
  for (var i = 0; i < str.length; i++){
    if (alphabet.slice(i, i+1) !== str.slice(i, i+1)){
      return alphabet.slice(i, i+1);
    }
  }
}
