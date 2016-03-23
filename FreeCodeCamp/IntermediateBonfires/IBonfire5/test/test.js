
describe('myReplace', function(){
  it('Should replace the before word with the after word', function(){
    expect(myReplace("Hello", "Hello", "Bye")).toEqual("Bye");
  });
  it('Should replace the before word with the after word even if there is another word in the string', function(){
    expect(myReplace("Hello World", "Hello", "Bye")).toEqual("Bye World");
  });
  it('Should replace the before word with the after word even if there is another word in the string at the beginning', function(){
    expect(myReplace("Matthew Says Hello World", "Hello", "Bye")).toEqual("Matthew Says Bye World");
  });
  it('Should match the capitalization of the replaced word', function(){
    expect(myReplace("Matthew Says Hello World", "Hello", "bye")).toEqual("Matthew Says Bye World");
  });
});
