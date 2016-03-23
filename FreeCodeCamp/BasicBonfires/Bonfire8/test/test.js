describe('repeat', function(){
  it('Should return original string if number passed in is 1', function(){
    expect(repeat("a" , 1)).toEqual("a");
  });
  it('Should return an empty string if the number passed in is less than 1', function(){
    expect(repeat("a" , 0)).toEqual("");
  });
  it('Should return a duplicate of the string concatenated with a number of 2', function(){
    expect(repeat("a" , 2)).toEqual("aa");
  });
});
