
describe('find', function(){
  it('Should return the first even number when a function for even numbers is passed in', function(){
    expect(find([1, 2, 3, 4], function(num){ return num % 2 === 0; })).toEqual(2);
  });
  it('Should return the 4 when a function for even numbers is passed in', function(){
    expect(find([1, 3, 4], function(num){ return num % 2 === 0; })).toEqual(4);
  });
});
