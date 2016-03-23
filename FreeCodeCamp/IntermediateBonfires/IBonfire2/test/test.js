describe('diff', function(){
  it('Should return an array of different items, even if empty', function(){
    expect(diff([1],[1])).toEqual([]);
  });
  it('Should return an array of different items, one item in one array', function(){
    expect(diff([1, 2],[2])).toEqual([1]);
  });
  it('should return the difference when three items are in the first array', function(){
    expect(diff([1, 2, 3],[2])).toEqual([1, 3]);
  });
  it('should return the difference when using strings', function(){
    expect(diff(["hi", "hello"],["hi"])).toEqual(["hello"]);
  });
  it('should return the difference when the second array has the differences', function(){
    expect(diff([2,4,6],[1,2,3,4,5,6])).toEqual([1,3,5]);
  });
});
