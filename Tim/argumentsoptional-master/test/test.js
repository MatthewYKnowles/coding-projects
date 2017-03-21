describe('addTogether', function(){
  it('If (2, 3) is passed return 5', function(){
  expect(addTogether(2, 3)).toEqual(5);
});
  it('If (2)(3) is passed return 5', function(){
  expect(addTogether(2)(3)).toEqual(5);
});
  it('If ("http://bit.ly/IqT6zt") is passed return undefined', function(){
  expect(addTogether("http://bit.ly/IqT6zt")).toEqual(undefined);
});
  it('If (2, "3") is  passed return undefined', function(){
  expect(addTogether(2, "3")).toEqual(undefined);
});
  it('If (2)([3]) is passed return undefined', function(){
  expect(addTogether(2)([3])).toEqual(undefined);
});
});



