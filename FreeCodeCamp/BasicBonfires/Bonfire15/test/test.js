describe('where', function(){
  it('Should return an integer of zero representing where the number would be inserted into the array', function(){
    expect(where([], 1)).toEqual(0);
  });
  it('Should return an integer of 1 representing where the number would be inserted into the array', function(){
    expect(where([0], 1)).toEqual(1);
  });
  it('Should return an integer of 1 representing where the number would be inserted into the array if it goes in the middle', function(){
    expect(where([0,2], 1)).toEqual(1);
  });
});
