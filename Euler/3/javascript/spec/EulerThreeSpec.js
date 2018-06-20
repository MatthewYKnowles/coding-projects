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
});