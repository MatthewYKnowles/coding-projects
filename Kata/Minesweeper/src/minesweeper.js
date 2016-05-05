System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var minesweeper;
    return {
        setters:[],
        execute: function() {
            minesweeper = (function () {
                function minesweeper() {
                }
                minesweeper.findBombs = function (map) {
                    var newMap = "";
                    var splitMap = map.split("\n");
                    var mineFieldWidth = map.length;
                    if (splitMap[0]) {
                        mineFieldWidth = splitMap[0].length;
                    }
                    for (var i = 0; i < mineFieldWidth; i++) {
                        if (map[i] == "*") {
                            newMap += "*";
                        }
                        else {
                            var tempVar = 0;
                            if (map[i - 1] == "*") {
                                tempVar++;
                            }
                            if (map[i + 1] == "*") {
                                tempVar++;
                            }
                            newMap += tempVar;
                        }
                    }
                    if (splitMap.length > 1) {
                        newMap += "\n";
                        for (var i = 0; i < splitMap[1].length; i++) {
                            if (splitMap[1][i] == "*") {
                                newMap += "*";
                            }
                            else {
                                var tempVar = 0;
                                if (splitMap[1][i - 1] == "*") {
                                    tempVar++;
                                }
                                if (splitMap[1][i + 1] == "*") {
                                    tempVar++;
                                }
                                if (splitMap[0][i] == "*") {
                                    tempVar++;
                                }
                                if (splitMap[0][i - 1] == "*") {
                                    tempVar++;
                                }
                                newMap += tempVar;
                            }
                        }
                    }
                    return newMap;
                };
                return minesweeper;
            }());
            exports_1("minesweeper", minesweeper);
        }
    }
});
//# sourceMappingURL=minesweeper.js.map