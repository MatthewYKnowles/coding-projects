function slasher(arr, howMany) {
  if (arr.length <= howMany){
    return [];
  }
  else if (howMany <= 0){
    return arr;
  }
  else {
    return arr.splice(-1, howMany);
  }
}
