describe('unite', function(){
  it('Should combine all the numbers from the three arrays passed in', function(){
    expect(unite([2],[3],[4])).toEqual([2,3,4]);
  });
  it('Should combine arrays within arrays', function(){
    expect(unite([2],[3, [5,6]],[4])).toEqual([2,3,5,6,4]);
  });
  it('Should work when only two arrays are passed in', function(){
    expect(unite([2],[4])).toEqual([2,4]);
  });
  it('Should remove repeated numbers', function(){
    expect(unite([2],[4],[4])).toEqual([2,4]);
  });
  it('Should remove repeated numbers', function(){
    expect(unite([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]]);
  });
});
