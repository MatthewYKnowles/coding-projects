
describe('updateInventory', function(){
  it('Should return the array with higher inventory for bowling ball', function(){
    var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
    var newInv = [[21, "Bowling Ball"]];
    var finalInv = [[42, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
    expect(updateInventory(curInv, newInv)).toEqual(finalInv);
  });
  it('Should sort the array alphabetically', function(){
    var curInv = [[21, "Bowling Ball"], [1, "Hair Pin"], [5, "Microphone"], [2, "Dirty Sock"]];
    var newInv = [[21, "Bowling Ball"]];
    var finalInv = [[42, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
    expect(updateInventory(curInv, newInv)).toEqual(finalInv);
  });
});
