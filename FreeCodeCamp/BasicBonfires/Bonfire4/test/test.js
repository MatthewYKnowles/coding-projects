describe('findLongestWord', function(){
  it('Should return length 1 when one letter is used', function(){
    expect(findLongestWord("A")).toEqual(1);
  });
  it('Should return length 2 when two letters are used', function(){
    expect(findLongestWord("AB")).toEqual(2);
  });
  it('Should return length 2 when three characters are separated by a space', function(){
    expect(findLongestWord("AB C")).toEqual(2);
  });
  it('Should return length 2 when three characters are separated by a space and the longer word is not the first word', function(){
    expect(findLongestWord("A BC")).toEqual(2);
  });
});
