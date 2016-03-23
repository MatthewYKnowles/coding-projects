
describe('steamroller', function(){
  it('Should return an array if there is one nested level', function(){
    expect(steamroller([[1]])).toEqual([1]);
  });
  it('Should return an array if there is two nested level', function(){
    expect(steamroller([[1,2]])).toEqual([1, 2]);
  });
  it('Should return an array if there is two nested level', function(){
    expect(steamroller([[1], 2])).toEqual([1, 2]);
  });
  it('Should return an array if there is two nested level', function(){
    expect(steamroller([[1], [], 2])).toEqual([1, 2]);
  });
  it('Should return an array if there is two nested level', function(){
    expect(steamroller([[[1]]])).toEqual([1]);
  });
});
