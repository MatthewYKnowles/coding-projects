function where(collection, source){
  var answer = [];
<<<<<<< HEAD
  var sourceKeyValue = Object.keys(source)[0]; // last
  var sourceKeyValueName = source[sourceKeyValue]; // Capulet
  var collectionKeyValue = Object.keys(collection[0]);
  if (sourceKeyValue === collectionKeyValue[1] && sourceKeyValueName === collection[0][collectionKeyValue[1]]){
    answer.push(collection[0]);
    return answer
  }
  var collectionKeyValue = Object.keys(collection[1]);
  if (sourceKeyValue === collectionKeyValue[1] && sourceKeyValueName === collection[1][collectionKeyValue[1]]){
    answer.push(collection[1]);
    return answer
  }
  var collectionKeyValue = Object.keys(collection[2]);
  if (sourceKeyValue === collectionKeyValue[1] && sourceKeyValueName === collection[2][collectionKeyValue[1]]){
    answer.push(collection[2]);
=======
  var sourceKeys = Object.keys(source);
  var numberOfSourceKeys = sourceKeys.length;
  for (var prop in collection){
    var numberOfMatchingKeyValuePairs = 0;
    for (var i = 0; i < Object.keys(collection[prop]).length; i++)
      for (var j = 0; j < numberOfSourceKeys; j++)
        if (Object.keys(collection[prop])[i] === Object.keys(source)[j])
          if (collection[prop][Object.keys(collection[prop])[i]] === source[Object.keys(source)[j]])
            numberOfMatchingKeyValuePairs += 1;
    if (numberOfMatchingKeyValuePairs === numberOfSourceKeys)
      answer.push(collection[prop]);
>>>>>>> 4067b547d700fde7aedd86bc2287850bb9ea7b4f
  }
return answer;
}
