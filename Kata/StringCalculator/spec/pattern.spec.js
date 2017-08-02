describe('String Calculator', () => {
    it('Should return empty string for 0', function () {
        expect(Add("0")).toEqual("");
    });
    it('Should return an int as a string', function () {
        expect(Add("1")).toEqual("1");
    });
    it('Should add two numbers together', function () {
        expect(Add("1,2")).toEqual("3");
    });
    it('Should add two zeroes and return an empty string', function () {
        expect(Add("0,0")).toEqual("");
    });
    it('Should except \n in addition to commas', function () {
        expect(Add("6\n3,8")).toEqual("17");
    });
    it('Should be able to change deliminator', function () {
        expect(Add("//;\n6,3,2")).toEqual("11");
    });
});
