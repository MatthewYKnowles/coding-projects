
describe('convert', function(){
  it('Should return original string if no special characters', function(){
    expect(convert("abc")).toEqual("abc");
  });
  it('Should replace an & with &amp;', function(){
    expect(convert("abc &")).toEqual("abc &amp;");
  });
  it('Should be able to replace multiple & with &amp;', function(){
    expect(convert("& abc &")).toEqual("&amp; abc &amp;");
  });
  it('Should be able to replace multiple > with &gt;', function(){
    expect(convert("> abc >")).toEqual("&gt; abc &gt;");
  });
  it('Should be able to replace multiple < with &lt;', function(){
    expect(convert("< abc <")).toEqual("&lt; abc &lt;");
  });
  it('Should be able to replace multiple " with &quot;', function(){
    expect(convert('hi " abc " bye')).toEqual("hi &quot; abc &quot; bye");
  });
  it('Should be able to replace multiple \' with &apos;', function(){
    expect(convert("hi ' abc ' bye")).toEqual("hi &apos; abc &apos; bye");
  });
});
