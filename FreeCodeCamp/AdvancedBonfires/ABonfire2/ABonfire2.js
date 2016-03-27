function sym(arg) {
    var numberObject = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
    for (var i = 0; i< arguments.length; i++) {
        var uniqueNumbersArray = removeArrayDuplicates(arguments[i]);
        for (var j = 0; j < uniqueNumbersArray.length; j++){
            var currentDigit = uniqueNumbersArray[j];
            numberObject[currentDigit] = (numberObject[currentDigit] + 1) % 2;
        }
    }
    return createArrayOfObjectParamentersThatHaveValueOfOne(numberObject);
}

function removeArrayDuplicates(array){
    var ArrayWithoutDuplicates = [];
    for (var i = 0; i < array.length; i++){
        if (ArrayWithoutDuplicates.indexOf(array) < 0){ArrayWithoutDuplicates.push(array[i]);}
    }
    return ArrayWithoutDuplicates;
}

function createArrayOfObjectParamentersThatHaveValueOfOne(obj){
    var array = [];
    for (var key in obj) {
        if (obj[key] === 1){
            array.push(parseInt(key));
        }
    }
    return array;
}