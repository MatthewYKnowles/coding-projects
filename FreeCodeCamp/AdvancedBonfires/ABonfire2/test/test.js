
describe('telephoneCheck', function(){
  it('Should return true an array of the digits passed in', function(){
    expect(sym([1,2,3])).toEqual([1,2,3]);
  });
  it('Should combine multiple arrays of unique numbers into one array', function(){
  expect(sym([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
  });
  it('Should remove numbers that appear twice', function(){
  expect(sym([1,2,3],[3,4,5])).toEqual([1,2,4,5]);
  })
});
