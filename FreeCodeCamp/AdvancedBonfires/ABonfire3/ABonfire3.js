var drawer = function(price, cash, cid) {
  var changeLeft = cash - price;
  var cidObject = createCashRegisterObject(cid);
  var changeToReturn = [];
  for (var i = 8; i >= 0; i--){
    var moneyType = cid[i][0];
    var cashValueOfMoneyType = cashReference[moneyType];
    if (cidObject[moneyType] >= cashValueOfMoneyType && changeLeft >= cashValueOfMoneyType){
      var changeToReturnLength = changeToReturn.length;
      changeToReturn.push(cid[i]);
      changeToReturn[changeToReturnLength][1] = 0.00;
      while (changeLeft >= cashValueOfMoneyType && cidObject[moneyType] >= cashValueOfMoneyType){
        changeToReturn[changeToReturnLength][1] += cashValueOfMoneyType;
        changeLeft -= cashValueOfMoneyType;
        changeLeft = roundToTwoDecimals(changeLeft);
        cidObject[moneyType] -= cashValueOfMoneyType;
      }
    }
  }
  if (changeLeft > 0){ return "Insufficient Funds";}
  if (noCashLeftInRegister(cidObject)){return "Closed";}
  return changeToReturn;
}

var cashReference = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.10, "QUARTER": 0.25, "ONE": 1.00, "FIVE": 5.00, "TEN": 10.00, "TWENTY": 20.00, "ONE HUNDRED": 100.00};

var roundToTwoDecimals = function(numberToRound){ return Math.round(numberToRound * 100)/100;}

var createCashRegisterObject = function(cashInDrawer) {
  var cashInDrawerObject = {};
  for (var i = 0; i < cashInDrawer.length; i++){ cashInDrawerObject[cashInDrawer[i][0]] = cashInDrawer[i][1];}
  return cashInDrawerObject;
}

var noCashLeftInRegister = function(cashInDrawer) {
  var cashInRegister = 0;
  for (var property in cashInDrawer) { cashInRegister += cashInDrawer[property];}
  return cashInRegister === 0;
}
