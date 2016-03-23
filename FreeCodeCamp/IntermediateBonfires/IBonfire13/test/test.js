
describe('sumFibs', function(){
  it('Should return 2 when 1 is passed in', function(){
    expect(sumFibs(1)).toEqual(2);
  });
  it('Should return 2 when 2 is passed in', function(){
    expect(sumFibs(2)).toEqual(2);
  });
  it('Should return 5 when 3 is passed in', function(){
    expect(sumFibs(3)).toEqual(5);
  });
  it('Should return 5 when 4 is passed in', function(){
    expect(sumFibs(4)).toEqual(5);
  });
  it('Should return 5 when 4 is passed in', function(){
    expect(sumFibs(5)).toEqual(10);
  });
});
