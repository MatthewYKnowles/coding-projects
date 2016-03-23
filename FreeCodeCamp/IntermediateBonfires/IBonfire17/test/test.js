
describe('drop', function(){
  it('Should return the original array if the first item satisfies the function passed in.', function(){
    expect(drop([1, 2, 3], function(n) {return n < 3; })).toEqual([1,2,3]);
  });
  it('Should return the first even number when a function for even numbers is passed in', function(){
    expect(drop([5, 1, 2, 3], function(n) {return n < 3; })).toEqual([1,2,3]);
  });
  it('Should return an empty array if nothing passes the funtion\'s test', function(){
    expect(drop([1, 2, 3, 4], function(n) {return n > 5;})).toEqual([]);
  });
});
