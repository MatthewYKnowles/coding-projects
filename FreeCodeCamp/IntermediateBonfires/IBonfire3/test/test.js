describe('convert', function(){
  it('Should return an I for input of 1', function(){ expect(convert(1)).toEqual("I");});
  it('Should return II for input of 2', function(){ expect(convert(2)).toEqual("II");});
  it('Should return IV for input of 4', function(){ expect(convert(4)).toEqual("IV");});
  it('Should return V for input of 5', function(){ expect(convert(5)).toEqual("V");});
  it('Should return VI for input of 6', function(){ expect(convert(6)).toEqual("VI");});
  it('Should return IX for input of 9', function(){ expect(convert(9)).toEqual("IX");});
  it('Should return X for input of 10', function(){ expect(convert(10)).toEqual("X");});
  it('Should return XIV for input of 14', function(){ expect(convert(40)).toEqual("XL");});
  it('Should return XLIV for input of 44', function(){ expect(convert(44)).toEqual("XLIV");});
  it('Should return XLIX for input of 49', function(){ expect(convert(49)).toEqual("XLIX");});
  it('Should return L for input of 50', function(){ expect(convert(50)).toEqual("L");});
  it('Should return XC for input of 90', function(){ expect(convert(90)).toEqual("XC");});
  it('Should return C for input of 100', function(){ expect(convert(100)).toEqual("C");});
  it('Should return CD for input of 400', function(){ expect(convert(400)).toEqual("CD");});
  it('Should return D for input of 500', function(){ expect(convert(500)).toEqual("D");});
  it('Should return CM for input of 900', function(){ expect(convert(900)).toEqual("CM");});
  it('Should return M for input of 1000', function(){ expect(convert(1000)).toEqual("M");});
});
