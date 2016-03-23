function chunk (arr, size) {
  var answer = [];
  var iterations = (arr.length/size);
  var i = 0;
  while (iterations > 0 ){
    answer.push(arr.slice((i*size) , (i*size+size)));
    iterations--;
    i++;
  }
  return answer;
}
