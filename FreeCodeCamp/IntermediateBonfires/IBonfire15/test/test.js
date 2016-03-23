
describe('smallestCommons', function(){
  it('Should return 2 when 1 and 2 are passed in', function(){
    expect(smallestCommons([1,2])).toEqual(2);
  });
  it('Should return 6 when 1 and 3 are passed in', function(){
    expect(smallestCommons([1,3])).toEqual(6);
  });
  it('Should return 60 when 1 and 5 are passed in', function(){
    expect(smallestCommons([1,5])).toEqual(60);
  });
  it('Should return 360360 when 1 and 13 are passed in', function(){
    expect(smallestCommons([1,13])).toEqual(360360);
  });
  it('Should still work if I switch the order of the parameters', function(){
    expect(smallestCommons([5,1])).toEqual(60);
  });
});
