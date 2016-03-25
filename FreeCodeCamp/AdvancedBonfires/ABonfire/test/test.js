
describe('telephoneCheck', function(){
  it('Should return true when 10 digits are passed in', function(){
    expect(telephoneCheck("1234567890")).toEqual(true);
  });
  it('Should return false when 9 digits are passed in', function(){
    expect(telephoneCheck("123456789")).toEqual(false);
  });
  it('Should return false when 10 characters are passed in and are not all digits', function(){
    expect(telephoneCheck("1234-56789")).toEqual(false);
  });
  it('Should return true when 10 digits are passed in and are separated with dashes', function(){
    expect(telephoneCheck("123-456-7809")).toEqual(true);
  });
  it('Should return true when an 11 digit number is passed in as long as the first digit is 1', function(){
    expect(telephoneCheck("1-123-456-7809")).toEqual(true);
  });
  it('Should return true a normal number with parenthesis and a 1 at the front is passed in', function(){
    expect(telephoneCheck("1 (206) 999-5678")).toEqual(true);
  });
});
