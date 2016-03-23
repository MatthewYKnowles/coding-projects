describe('rot13', function(){
  it('Should return A when N is passed in since A is 13 less than N', function(){
    expect(rot13("N")).toEqual("A");
  });
  it('Should return B when O is passed in since B is 13 less than O', function(){
    expect(rot13("O")).toEqual("B");
  });
  it('Should return Z when M is passed in since Z is 13 less than M if you restart at 0', function(){
    expect(rot13("M")).toEqual("Z");
  });
  it('Should return AA when NN is passed in since it should work for stings of 2', function(){
    expect(rot13("NN")).toEqual("AA");
  });
  it('Should return A A when N N is passed in since it should work for stings of 2', function(){
    expect(rot13("N N")).toEqual("A A");
  });
});
