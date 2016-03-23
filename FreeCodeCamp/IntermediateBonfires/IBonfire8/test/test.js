
describe('fearNotLetter', function(){
  it('Should be matched with C and returned together in an array within an array', function(){
    expect(fearNotLetter("a")).toEqual(undefined);
  });
  it('Should return b if it is missing from a string', function(){
    expect(fearNotLetter("ac")).toEqual("b");
  });
  it('Should return undefined if it doesn\' start with a', function(){
    expect(fearNotLetter("cdef")).toEqual(undefined);
  });
});
