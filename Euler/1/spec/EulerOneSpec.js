describe("sumOfMultiplesOfThreeAndFive", function(){
    it("should return 0 when 2 is passed in", function(){
        expect(sumOfMultiplesOfThreeAndFive(2)).toBe(0);
    });
    it("should return 0 when 3 is passed in", function(){
        expect(sumOfMultiplesOfThreeAndFive(3)).toBe(0);
    });
    it("should return 3 when 5 is passed in", function(){
        expect(sumOfMultiplesOfThreeAndFive(5)).toBe(3);
    });
    it("should return 8 when 6 is passed in", function(){
        expect(sumOfMultiplesOfThreeAndFive(6)).toBe(8);
    });
    it("should return 233168 when 1000 is passed in", function(){
        expect(sumOfMultiplesOfThreeAndFive(1000)).toBe(233168);
    });
    it("should return 23 when 10 is passed in", function(){
        expect(sumOfMultiplesOfThreeAndFive(10000)).toBe(23331668);
    });
    it("should return 23 when 10 is passed in", function(){
        expect(sumOfMultiplesOfThreeAndFive(1234567)).toBe(355636612814);
    });
});