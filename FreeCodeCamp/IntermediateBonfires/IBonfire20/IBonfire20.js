function every(collection, pre){
  var collectionContainsPredicate = true;
  for (var i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(pre) === false  || Boolean(collection[i][pre]) === false) {collectionContainsPredicate = false;}
  }
  return collectionContainsPredicate;
}
