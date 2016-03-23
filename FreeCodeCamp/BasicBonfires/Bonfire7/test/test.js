describe('end', function(){
  it('Should return True if both one character strings entered are the same', function(){
    expect(end("m","m")).toEqual(true);
  });
  it('Should return False if both one character strings are different', function(){
    expect(end("m","b")).toEqual(false);
  });
  it('Should return True if the second character of a two character string is the same as the one character target string', function(){
    expect(end("mb","b")).toEqual(true);
  });
});
