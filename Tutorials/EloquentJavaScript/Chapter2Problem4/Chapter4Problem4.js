function deepEqual(object1, object2){
  if (object1 === object2)
    return true;
  if (object1 == null || typeof object1 != "object" || object2 == null || typeof object2 != "object")
    return false;
  var propsInObject1 = 0, propsInObject2 = 0;

  for (var prop in object1)
    propsInObject1 += 1;

  for (var prop in object2){
    propsInObject2 += 1;
    if (!(prop in object1) || !deepEqual(object1[prop], object2[prop]))
      return false;
  }
  return propsInObject1 == propsInObject2;
}
