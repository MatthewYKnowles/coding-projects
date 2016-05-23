System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PermAlone;
    return {
        setters:[],
        execute: function() {
            class PermAlone {
                constructor(stringToCheck) {
                    this._arrayOfPermutations = [];
                    this._arrayToGetPermutationsFrom = stringToCheck.split("");
                }
                calculateNumberOfNonRepeatingPermutations(arrayToCheck) {
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
                static swap(array, pos1, pos2) {
                    let temp = array[pos1];
                    array[pos1] = array[pos2];
                    array[pos2] = temp;
                }
                heapsPermute(array, output, n) {
                    n = n || array.length;
                    if (n === 1) {
                        output(array);
                    }
                    else {
                        for (let i = 1; i <= n; i++) {
                            this.heapsPermute(array, output, n - 1);
                            let j = 0;
                            if (n % 2) {
                                j = 1;
                            }
                            else {
                                j = i;
                            }
                            PermAlone.swap(array, j - 1, n - 1);
                        }
                    }
                }
                pushToArray(arrayToPush) {
                    let middle = [];
                    for (let i = 0; i < arrayToPush.length; i++) {
                        middle.push(arrayToPush[i]);
                    }
                    this._arrayOfPermutations.push(middle);
                }
            }
            exports_1("PermAlone", PermAlone);
        }
    }
});
//# sourceMappingURL=permalone.js.map