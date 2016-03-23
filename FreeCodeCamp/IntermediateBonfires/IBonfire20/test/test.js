
describe('every', function(){
  it('Should return true if the object has the value passed in', function(){
    expect(every([{"user": "Tinky-Winky", "sex": "male"}], "sex")).toEqual(true);
  });
  it('Should return false if the object does not have the value passed in', function(){
    expect(every([{"user": "Tinky-Winky"}], "sex")).toEqual(false);
  });
  it('Should return false ifthe second object does not contain the property', function(){
    expect(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}], "sex")).toEqual(false);
  });
  it('Should return false when the property\'s value is set to an empty string', function(){
    expect(every([{"user": "Tinky-Winky", "sex": ""}], "sex")).toEqual(false);
  });
});
