System.register(["../src/permalone"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var permalone_1;
    return {
        setters:[
            function (permalone_1_1) {
                permalone_1 = permalone_1_1;
            }],
        execute: function() {
            describe("permAlone", () => {
                it("should return 1 for a 1 letter string", () => {
                    let permAlone = new permalone_1.PermAlone("a");
                    let array = [];
                    let logToArray = function (input) {
                        let middle = [];
                        for (var i = 0; i < input.length; i++) {
                            middle.push(input[i]);
                        }
                        array.push(middle);
                    };
                    permAlone.heapsPermute(permAlone._arrayToGetPermutationsFrom, logToArray);
                    expect(permAlone.calculateNumberOfNonRepeatingPermutations(array)).toBe(1);
                });
                it("should return 2 for a 2 letter string with different letters", () => {
                    let permAlone = new permalone_1.PermAlone("ab");
                    let array = [];
                    let logToArray = function (input) {
                        let middle = [];
                        for (var i = 0; i < input.length; i++) {
                            middle.push(input[i]);
                        }
                        array.push(middle);
                    };
                    permAlone.heapsPermute(permAlone._arrayToGetPermutationsFrom, logToArray);
                    expect(permAlone.calculateNumberOfNonRepeatingPermutations(array)).toBe(2);
                });
                it("should return 0 for a 2 letter string with the same letters", () => {
                    let permAlone = new permalone_1.PermAlone("aa");
                    let array = [];
                    let logToArray = function (input) {
                        let middle = [];
                        for (var i = 0; i < input.length; i++) {
                            middle.push(input[i]);
                        }
                        array.push(middle);
                    };
                    permAlone.heapsPermute(permAlone._arrayToGetPermutationsFrom, logToArray);
                    expect(permAlone.calculateNumberOfNonRepeatingPermutations(array)).toBe(0);
                });
                it("should return 6 for a 3 letter string with same letters", () => {
                    let permAlone = new permalone_1.PermAlone("abc");
                    let array = [];
                    let logToArray = function (input) {
                        let middle = [];
                        for (var i = 0; i < input.length; i++) {
                            middle.push(input[i]);
                        }
                        array.push(middle);
                    };
                    permAlone.heapsPermute(permAlone._arrayToGetPermutationsFrom, logToArray);
                    expect(permAlone.calculateNumberOfNonRepeatingPermutations(array)).toBe(6);
                });
                it("should return 2 for a 3 letter string with two same letters", () => {
                    let stringToCheck = "aab".split("");
                    let permAlone = new permalone_1.PermAlone("aab");
                    let array = [];
                    let logToArray = function (input) {
                        let middle = [];
                        for (var i = 0; i < input.length; i++) {
                            middle.push(input[i]);
                        }
                        array.push(middle);
                    };
                    function calculateNumberOfNonRepeatingPermutations(arrayToCheck) {
                        if (arrayToCheck.length === 1) {
                            return 1;
                        }
                        let count = 0;
                        for (let i = 0; i < arrayToCheck.length; i++) {
                            let isThisUnique = true;
                            for (let j = 0; j < arrayToCheck[0].length - 1; j++) {
                                console.log(arrayToCheck[i][j]);
                                console.log(arrayToCheck[i][j + 1]);
                                if (arrayToCheck[i][j] === arrayToCheck[i][j + 1]) {
                                    console.log(isThisUnique);
                                    isThisUnique = false;
                                    console.log(isThisUnique);
                                }
                            }
                            if (isThisUnique) {
                                count += 1;
                            }
                        }
                        return count;
                    }
                    function swap(array, pos1, pos2) {
                        let temp = array[pos1];
                        array[pos1] = array[pos2];
                        array[pos2] = temp;
                    }
                    function heapsPermute(array, output, n) {
                        n = n || array.length;
                        if (n === 1) {
                            output(array);
                        }
                        else {
                            for (let i = 1; i <= n; i++) {
                                heapsPermute(array, output, n - 1);
                                let j = 0;
                                if (n % 2) {
                                    j = 1;
                                }
                                else {
                                    j = i;
                                }
                                swap(array, j - 1, n - 1);
                            }
                        }
                    }
                    heapsPermute(stringToCheck, logToArray);
                    expect(calculateNumberOfNonRepeatingPermutations(array)).toBe(2);
                });
            });
        }
    }
});
//# sourceMappingURL=permalone.spec.js.map