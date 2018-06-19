function sumOfMultiplesOfThreeAndFive(input){
    let sum = 0;
    for (let i = 0; i < input; i++) {
        if (shouldAddToSum(i)) {
            sum += i;
        }
    }
    return sum;
}

function shouldAddToSum(number) {
    return number % 5 === 0 || number % 3 === 0;
}
