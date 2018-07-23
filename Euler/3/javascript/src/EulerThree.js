function largestPrimeFactor(number){
    let currentPotentialFactor = Math.floor(number / 2);
    while (currentPotentialFactor !== 1) {
        if (number % currentPotentialFactor === 0){
            return currentPotentialFactor;
        }
        currentPotentialFactor--;
    }
    return number;
}