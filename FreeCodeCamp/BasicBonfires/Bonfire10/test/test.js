describe('chunk', function(){
  it('Should return an array of 1 when the number 1 is passed in', function(){
    expect(chunk(["a"] , 1)).toEqual([["a"]]);
  });
  it('Should return two arrays of length 1 when the number 1 is passed in and a two item array is passed in', function(){
    expect(chunk(["a", "b"] , 1)).toEqual([["a"], ["b"]]);
  });
  it('Should return two arrays of length 2 when the number 2 is passed in and a four item array is passed in', function(){
    expect(chunk(["a", "b", "c", "d"] , 3)).toEqual([["a", "b", "c"], ["d"]]);
  });
});
