describe('sumAll', function(){
  it('Should return an integer with the sum of the two numbers', function(){
    expect(sumAll([1,2])).toEqual(3);
  });
  it('Should return an integer with the sum of the two numbers as long as they are next to each other', function(){
    expect(sumAll([2,3])).toEqual(5);
  });
  it('Should return an integer with the sum of the two numbers and the one number inbetween', function(){
    expect(sumAll([1,3])).toEqual(6);
  });
});
