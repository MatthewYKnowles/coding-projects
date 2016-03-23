
describe('spinalCase', function(){
  it('Should return the original string if everything is lowercase', function(){
    expect(spinalCase("abcd")).toEqual("abcd");
  });
  it('Should return the original string in lowercase', function(){
    expect(spinalCase("Abcd")).toEqual("abcd");
  });
  it('Should put dashes before capital letters', function(){
    expect(spinalCase("abCd")).toEqual("ab-cd");
  });
  it('Should replace space with dashes', function(){
    expect(spinalCase("ab cd")).toEqual("ab-cd");
  });
  it('Should have only 1 dash when a space is followed by a capital letter', function(){
    expect(spinalCase("ab Cd")).toEqual("ab-cd");
  });
  it('Should replace underscores with dashes', function(){
    expect(spinalCase("ab_Cd")).toEqual("ab-cd");
  });
});
