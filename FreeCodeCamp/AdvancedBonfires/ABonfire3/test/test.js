
describe('drawer', function(){
  it('Should return a string of "Insufficient Funds" if the Cash In Drawer(CID) is less than cash minus price (change)', function(){
    var emptyRegister = [["PENNY", 0.00], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
    expect(drawer(1.00, 1.01, emptyRegister)).toEqual("Insufficient Funds");
  });
  it('Should return a string of "Closed" if the CID is equal to the change', function(){
    var onePenny = [["PENNY", 0.01], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
    expect(drawer(1.00, 1.01, onePenny)).toEqual("Closed");
  });
  it('Should return an array of one penny if the CID is one penny more than the change', function(){
    var twoPennies = [["PENNY", 0.02], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
    expect(drawer(1.00, 1.01, twoPennies)).toEqual([["PENNY", 0.01]]);
  });
  it('Should return an array of two pennies if the change is .02', function(){
    var threePennies = [["PENNY", 0.03], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
    expect(drawer(1.00, 1.02, threePennies)).toEqual([["PENNY", 0.02]]);
  });
  it('Should return an array of one penny if the CID is one penny more than the change', function(){
    var twoNickels = [["PENNY", 0.00], ["NICKEL", 0.10], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
    expect(drawer(1.00, 1.05, twoNickels)).toEqual([["NICKEL", 0.05]]);
  });
  it('Should return an array of one penny and one nickle', function(){
    var onePennyTwoNickels = [["PENNY", 0.01], ["NICKEL", 0.10], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
    expect(drawer(1.00, 1.06, onePennyTwoNickels)).toEqual([["NICKEL", 0.05], ["PENNY", 0.01]]);
  });
  it('Should return a string of "Insufficient Funds" when you can\'t make exact change', function(){
    var twoNickels = [["PENNY", 0.00], ["NICKEL", 0.10], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
    expect(drawer(1.00, 1.06, twoNickels)).toEqual("Insufficient Funds");
  });
  it('Should return one of each currency when one of each currency plus a penny is passed in', function(){
    var oneOfEachCurrencyPlusAPenny = [["PENNY", 0.02], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
    var oneOfEachCurrencyInReverseOrder = [["ONE HUNDRED", 100.00], ["TWENTY", 20.00], ["TEN", 10.00], ["FIVE", 5.00], ["ONE", 1.00], ["QUARTER", 0.25], ["DIME", 0.10], ["NICKEL", 0.05], ["PENNY", 0.01]];
    expect(drawer(1.00, 137.41, oneOfEachCurrencyPlusAPenny)).toEqual(oneOfEachCurrencyInReverseOrder);
  });
  it('Should return closed when one of each currency is passed in and 136.41 is required', function(){
    var oneOfEachCurrency = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
    expect(drawer(1.00, 137.41, oneOfEachCurrency)).toEqual("Closed");
  });
  it('Should return the correct amounts of each currency out of the cid where there is a lot money in the in drawer', function(){
    var bunchOfMoney = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]];
    expect(drawer(3.26, 100.00, bunchOfMoney)).toEqual([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]);
  });
});
