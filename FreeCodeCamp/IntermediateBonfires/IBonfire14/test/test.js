
describe('sumPrimes', function(){
  it('Should return 2 when 2 is passed in', function(){
    expect(sumPrimes(2)).toEqual(2);
  });
  it('Should return 5 when 3 is passed in', function(){
    expect(sumPrimes(3)).toEqual(5);
  });
  it('Should return 5 when 4 is passed in', function(){
    expect(sumPrimes(4)).toEqual(5);
  });
  it('Should return 10 when 5 is passed in', function(){
    expect(sumPrimes(5)).toEqual(10);
  });
  it('Should return 17 when 10 is passed in', function(){
    expect(sumPrimes(10)).toEqual(17);
  });
});
