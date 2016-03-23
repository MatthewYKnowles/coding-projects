
describe('pair', function(){
  it('G should be matched with C and returned together in an array within an array', function(){
    expect(pair("G")).toEqual([["G","C"]]);
  });
  it('a two letter string should return two arrays within an array', function(){
    expect(pair("GC")).toEqual([["G","C"],["C","G"]]);
  });
  it('a two letter string should return two arrays within an array', function(){
    expect(pair("GC")).toEqual([["G","C"],["C","G"]]);
  });
  it('should convert T to a pair of T and A', function(){
    expect(pair("GCT")).toEqual([["G","C"],["C","G"],["T","A"]]);
  });
});
