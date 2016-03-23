describe('mutation', function(){
  it('Should return true if the two strings passed in are the same', function(){
    expect(mutation(["a","a"])).toEqual(true);
  });
  it('Should return false if the second string in the array contains a letter than the first string doesn\'t contain', function(){
    expect(mutation(["a","ab"])).toEqual(false);
  });
  it('Should return true if the second string in the array contains only letters that the first string contains', function(){
    expect(mutation(["abc","ab"])).toEqual(true);
  });
  it('Should return true if the letters match regardless of capitalization', function(){
    expect(mutation(["A","a"])).toEqual(true);
  });
});
