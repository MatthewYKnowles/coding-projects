function fibonacciEvenSum(index){
    let smallestFibonacciNumber = 0;
    let middleFibonacciNumber = 1;
    let largestFibonacciNumber = 1;
    let sum = 0;
    for (let i = 0; i < index; i++) {
        let total = middleFibonacciNumber + largestFibonacciNumber;
        if (total % 2 === 0){
            sum += total;
        }
        smallestFibonacciNumber = middleFibonacciNumber;
        middleFibonacciNumber = largestFibonacciNumber;
        largestFibonacciNumber = smallestFibonacciNumber + middleFibonacciNumber;
    }
    return sum;
}