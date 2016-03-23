describe('truncate', function(){
  it('Should return original string if number passed in is 1', function(){
    expect(truncate("a" , 1)).toEqual("a");
  });
  it('Should return "..." if the number is 0', function(){
    expect(truncate("a" , 0)).toEqual("...");
  });
  it('Should return the first character of a two character string followed by "..." if the number is 1' , function(){
    expect(truncate("ab" , 1)).toEqual("a...");
  });
  it('Should count the three dots in the maximum number if the number is greater than 3' , function(){
    expect(truncate("abcde" , 4)).toEqual("a...");
  });
  it('Should return the original string if the number is longer than the string length' , function(){
    expect(truncate("abcdefghi" , 25)).toEqual("abcdefghi");
  });
});
