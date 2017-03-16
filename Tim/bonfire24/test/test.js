describe('fearNotLetter', function(){
  it('If "abce" is passed return "d"', function(){
  expect(fearNotLetter("abce")).toEqual("d");
});
  it('If "abcdefghjklmno" is passed return "i"', function(){
  expect(fearNotLetter("abcdefghjklmno")).toEqual("i");
});
  it('If "bcd" is passed return undefined', function(){
  expect(fearNotLetter("bcd")).toEqual(undefined);
});
  it('If "yz" is passed return undefined', function(){
  expect(fearNotLetter("yz")).toEqual(undefined);
});

});