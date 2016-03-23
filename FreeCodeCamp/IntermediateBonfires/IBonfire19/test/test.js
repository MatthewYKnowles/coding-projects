
describe('binaryAgent', function(){
  it('Should return the letter a when 01100001 is passed in', function(){
    expect(binaryAgent("01100001")).toEqual("a");
  });
  it('Should return the letter b when 01100010 is passed in', function(){
    expect(binaryAgent("01100010")).toEqual("b");
  });
  it('Should return the letters ab when 01100010 01100010 is passed in', function(){
    expect(binaryAgent("01100001 01100010")).toEqual("ab");
  });
});
