function sumOfMultiplesOfThreeAndFive(number){
    var answer = 0;
    var maxNumber = number - 1;
    var multiplesOfThree = Math.floor(maxNumber/3);
    if (multiplesOfThree % 2 === 1){
        answer += (multiplesOfThree*3)* Math.ceil(multiplesOfThree/2);
    }
    if (multiplesOfThree % 2 === 0){
        answer += (multiplesOfThree*3+3)* Math.ceil(multiplesOfThree/2);
    }
    var multiplesOfFive = Math.floor(maxNumber/5);
    if (multiplesOfFive % 2 === 1){
        answer += (multiplesOfFive*5)* Math.ceil(multiplesOfFive/2);
    }
    if (multiplesOfFive % 2 === 0){
        answer += (multiplesOfFive*5+5)* Math.ceil(multiplesOfFive/2);
    }
    var multiplesOfFifteen = Math.floor(maxNumber/15);
    if (multiplesOfFifteen % 2 === 1){
        answer -= (multiplesOfFifteen*15)* Math.ceil(multiplesOfFifteen/2);
    }
    if (multiplesOfFifteen % 2 === 0){
        answer -= (multiplesOfFifteen*15+15)* Math.ceil(multiplesOfFifteen/2);
    }
    return answer;
}