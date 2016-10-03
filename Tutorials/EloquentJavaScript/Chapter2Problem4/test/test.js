var obj = {here: {is: "an"}, object: 2};

describe('deepEqual', function(){
  it('Should return true when the same object is passed in twice', function(){
    expect(deepEqual(obj, obj)).toEqual(true);
  });
  it('Should return false if a different object is passed in', function(){
    expect(deepEqual(obj, {here: 1, object: 2})).toEqual(false);
  });
  it('Should return true if a different object is passed in with the same values', function(){
    expect(deepEqual(obj, {here: {is: "an"}, object: 2})).toEqual(true);
  });
});
