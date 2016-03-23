
describe('translate', function(){
  it('Should add way to the end if the first letter is a vowel', function(){
    expect(translate("othello")).toEqual("othelloway");
  });
  it('Should not matter if the first letter is capitalized', function(){
    expect(translate("Aligator")).toEqual("Aligatorway");
  });
  it('Should move to the end of the word a constanant and add ay', function(){
    expect(translate("buck")).toEqual("uckbay");
  });
  it('Should move to the end of the word two constanants and add ay if there is no vowel in the first two letters', function(){
    expect(translate("glove")).toEqual("oveglay");
  });
});
