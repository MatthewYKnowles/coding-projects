
function sumFibs(number) {
	var arrayOfFibs = createArrayOfFibs(number);
  	return sumOddNumbers(number, arrayOfFibs);
}

var createArrayOfFibs = function (num) {
    var arrayOfFibs = [1, 1];

    for (var i = 0; arrayOfFibs[i + 1] <= num; i++) {
        arrayOfFibs.push(arrayOfFibs[i] + arrayOfFibs[i + 1]);
    }
    return arrayOfFibs;
};

let sumOddNumbers = function (num, arrayOfFibs) {
    OddFibs = arrayOfFibs.filter(odd);
    OddFibs.pop();
    return OddFibs.reduce(add, 0);
};

function odd(test){
    return test % 2 !== 0;
}

function add(a,b){
    return a + b;
}
