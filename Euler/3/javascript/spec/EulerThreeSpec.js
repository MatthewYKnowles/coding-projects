describe("largestPrimeFactor", function(){
    it("should return 2 as the largest prime factor of 2", function(){
        expect(largestPrimeFactor(2)).toBe(2);
    });
    it("should return 3 as the largest prime factor of 3", function(){
        expect(largestPrimeFactor(3)).toBe(3);
    });
    it("should return 2 as the largest prime factor of 4", function(){
        expect(largestPrimeFactor(4)).toBe(2);
    });
    it("should return 5 as a prime number", function(){
        expect(largestPrimeFactor(5)).toBe(5);
    });
    it("should return 3 as largest prime factor of 6", function(){
        expect(largestPrimeFactor(6)).toBe(3);
    });
    it("should return 7 as largest prime factor of 7", function(){
        expect(largestPrimeFactor(7)).toBe(7);
    });
    it("project Euler answer", function(){
        expect(largestPrimeFactor(600851475143)).toBe(7);
    });
});