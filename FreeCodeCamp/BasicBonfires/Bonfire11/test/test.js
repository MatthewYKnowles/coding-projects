describe('slasher', function(){
  it('Should return the original array when a value of zero is passed in', function(){
    expect(slasher([1] , 0)).toEqual([1]);
  });
  it('Should return an empty array if the number passed in is longer than or the same size as the length of the array', function(){
    expect(slasher([1] , 1)).toEqual([]);
  });
  it('Should return an array missing the first item of the passed in array if the number passed in is 1', function(){
    expect(slasher([1, 2] , 1)).toEqual([2]);
  });
});
