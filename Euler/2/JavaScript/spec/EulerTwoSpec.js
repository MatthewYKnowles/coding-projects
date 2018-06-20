describe("fibonacciEvenSum", function(){
    it("initial value is 2", function(){
        expect(fibonacciEvenSum(1)).toBe(2);
    });
    it("second value is not even", function(){
        expect(fibonacciEvenSum(2)).toBe(2);
    });
    it("third value is not even", function(){
        expect(fibonacciEvenSum(3)).toBe(2);
    });
    it("forth value is even and should be added", function(){
        expect(fibonacciEvenSum(4)).toBe(10);
    });
    it("should add up the first 4 even values", function(){
        expect(fibonacciEvenSum(10)).toBe(188);
    });
});