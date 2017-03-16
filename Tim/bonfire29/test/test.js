describe('sumFibs', function(){
  it('If 1000 is passed return 1785', function(){
  expect(sumFibs(1000)).toEqual(1785);
});
  it('If 4000000 is passed return 4613732', function(){
  expect(sumFibs(4000000)).toEqual(4613732);
});
  it('If 4 is passed return 5', function(){
  expect(sumFibs(4)).toEqual(5);
});
  it('If 75024 is passed return 60696', function(){
  expect(sumFibs(75024)).toEqual(60696);
});
  it('If 75025 is passed return 135721', function(){
  expect(sumFibs(75025)).toEqual(135721);
});
});


