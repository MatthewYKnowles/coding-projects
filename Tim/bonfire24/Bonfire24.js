
function fearNotLetter(str) {
    var codes = createCodes(str);
    for(var i = 1; i < codes.length; i++){
      if(codeIsOffByMoreThanOne(codes, i)){
        return String.fromCharCode(codes[i]-1);
    }
  }
  return undefined;
}

var codeIsOffByMoreThanOne = function (codes, index) {
    return codes[index] - codes[index - 1] > 1;
};

var createCodes = function (str) {
    var codes = [];
    for (var i in str) {
        codes[i] = str.charCodeAt(i);
    }
    return codes;
};

fearNotLetter("abce");