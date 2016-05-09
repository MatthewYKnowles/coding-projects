System.register(["src/sample"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var sample_1;
    return {
        setters:[
            function (sample_1_1) {
                sample_1 = sample_1_1;
            }],
        execute: function() {
            describe("function name", () => {
                it("should return true", () => {
                    expect(true).toBe(true);
                });
                it("should return true", () => {
                    let sample = new sample_1.Sample();
                    expect(sample.true()).toBe(true);
                });
            });
        }
    }
});
//# sourceMappingURL=sample.spec.js.map