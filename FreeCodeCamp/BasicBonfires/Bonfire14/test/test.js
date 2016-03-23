describe('destroyer', function(){
  it('Should return an array of a number when that is all thats passed in', function(){
    expect(destroyer([1])).toEqual([1]);
  });
  it('Should remove a number from the array if it is equal to the second argument passed in', function(){
    expect(destroyer([1], 1)).toEqual([]);
  });
  it('Should remove a number from the array of two numbers if one of them is equal to the second argument passed in', function(){
    expect(destroyer([1, 2], 1)).toEqual([2]);
  });
  it('Should remove a number from the array of two numbers if one of them is equal to the second argument passed in', function(){
    expect(destroyer([1, 2, 3], 1, 3)).toEqual([2]);
  });
});
