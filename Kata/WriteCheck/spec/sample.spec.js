"use strict";
var sample_1 = require("../src/sample");
describe("Check Write", function () {
    it("should return 1 cent in check long form", function () {
        var checkWrite = new sample_1.CheckWrite(.01);
        expect(checkWrite.getLongFormAmount()).toBe("1/100");
    });
    it("should return 2 cents in check long form", function () {
        var checkWrite = new sample_1.CheckWrite(.02);
        expect(checkWrite.getLongFormAmount()).toBe("2/100");
    });
    it("should return 1 dollar in check long form", function () {
        var checkWrite = new sample_1.CheckWrite(1.00);
        expect(checkWrite.getLongFormAmount()).toBe("one and 00/100");
    });
    it("should return 2 dollars and ten cents in check long form", function () {
        var checkWrite = new sample_1.CheckWrite(2.10);
        expect(checkWrite.getLongFormAmount()).toBe("two and 10/100");
    });
    it("should return 10 dollars and 99 cents in check long form", function () {
        var checkWrite = new sample_1.CheckWrite(10.99);
        expect(checkWrite.getLongFormAmount()).toBe("ten and 99/100");
    });
    it("should return 20 dollars and 50 cents in check long form", function () {
        var checkWrite = new sample_1.CheckWrite(20.50);
        expect(checkWrite.getLongFormAmount()).toBe("twenty and 50/100");
    });
    it("should return 21 dollars and 00 cents in check long form", function () {
        var checkWrite = new sample_1.CheckWrite(21.00);
        expect(checkWrite.getLongFormAmount()).toBe("twenty one and 00/100");
    });
});
//# sourceMappingURL=sample.spec.js.map