describe('bouncer', function(){
  it('Should return an array of a number when that is all thats passed in', function(){
    expect(bouncer([7])).toEqual([7]);
  });
  it('Should return an array of a number when an array of a number and a null are passed in', function(){
    expect(bouncer([7, null])).toEqual([7]);
  });
  it('Should return an array of a number when an array of a non-zero number, a null, and a zero are passed in', function(){
    expect(bouncer([7, null, 0])).toEqual([7]);
  });
  it('Should return an array of a number when an array of a non-zero number, a null, and a zero are passed in', function(){
    expect(bouncer([7, null, 0, "hi"])).toEqual([7, "hi"]);
  });
  it('Should return an array of a number when an array of a non-zero number, a null, and a zero are passed in', function(){
    expect(bouncer([7, null, 0, "hi", ""])).toEqual([7, "hi"]);
  });
  it('Should return an array of a number when an array of a non-zero number, a null, and a zero are passed in', function(){
    expect(bouncer([7, null, 0, "hi", "", false])).toEqual([7, "hi"]);
  });
  it('Should return an array of a number when an array of a non-zero number, a null, and a zero are passed in', function(){
    expect(bouncer([7, null, 0, "hi", "", false, undefined, NaN])).toEqual([7, "hi"]);
  });
  it('Should return an array of a number when an array of a non-zero number, a null, and a zero are passed in', function(){
    expect(bouncer([null, 0, ""])).toEqual([]);
  });
});
