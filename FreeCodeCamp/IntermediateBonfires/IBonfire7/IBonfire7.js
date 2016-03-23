function pair(str){
  var answer = [];
  for (var i = 0; i < str.length; i++){
    var DNApair = [];
    var currentLetter = str.slice(i, i + 1);
    DNApair.push(currentLetter);
    if (currentLetter === "C"){
      DNApair.push("G");
    }
    else if (currentLetter === "G"){
      DNApair.push("C");
    }
    else if (currentLetter === "T"){
      DNApair.push("A");
    }
    else{
      DNApair.push("T");
    }
    answer.push(DNApair);
  }
  return answer;
}
