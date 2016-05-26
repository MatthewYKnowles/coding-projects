function sumOfMultiplesOfThreeAndFive(number){
    var answer = 0;
    var maxNumber = number - 1;
    var multiplesOfThree = Math.floor(maxNumber/3);
    if (multiplesOfThree % 2 === 1){
        answer += (multiplesOfThree*3)* divideByTwoRoundingUp(multiplesOfThree);
    }
    if (multiplesOfThree % 2 === 0){
        answer += (multiplesOfThree*3+3)* divideByTwoRoundingUp(multiplesOfThree);
    }
    var multiplesOfFive = Math.floor(maxNumber/5);
    if (multiplesOfFive % 2 === 1){
        answer += (multiplesOfFive*5)* divideByTwoRoundingUp(multiplesOfFive);
    }
    if (multiplesOfFive % 2 === 0){
        answer += (multiplesOfFive*5+5)* divideByTwoRoundingUp(multiplesOfFive);
    }
    var multiplesOfFifteen = Math.floor(maxNumber/15);
    if (multiplesOfFifteen % 2 === 1){
        answer -= (multiplesOfFifteen*15)* divideByTwoRoundingUp(multiplesOfFifteen);
    }
    if (multiplesOfFifteen % 2 === 0){
        answer -= (multiplesOfFifteen*15+15)* divideByTwoRoundingUp(multiplesOfFifteen);
    }
    return answer;
}

function divideByTwoRoundingUp(whatToDivide) {
    return Math.ceil(whatToDivide/2);
}