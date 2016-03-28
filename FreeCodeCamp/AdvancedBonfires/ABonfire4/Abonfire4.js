function updateInventory(arr1, arr2) {
    var arrayOneAsObject = inventoryArrayAsObject(arr1, {});
    var arrayPlusNewInventory = inventoryArrayAsObject(arr2, arrayOneAsObject);
    var unsortedArray = inventoryObjectToArray(arrayPlusNewInventory);
    var sortedArray = unsortedArray.sort(function (a, b) {
        if (a[0] < b[0])
            return -1;
        if (a[0] > b[0])
            return 1;
        return 0;
    });
    return switchItemsInArrayLocations(sortedArray);
}
function inventoryArrayAsObject(arr, obj) {
    var arrayAsObject = obj;
    for (var i = 0; i < arr.length; i++) {
        var currentItem = arr[i][1];
        if (arrayAsObject[currentItem]) {
            arrayAsObject[currentItem] += arr[i][0];
        }
        else {
            arrayAsObject[currentItem] = arr[i][0];
        }
    }
    return arrayAsObject;
}
function inventoryObjectToArray(obj) {
    var objectAsArray = [];
    for (var key in obj) {
        var inventoryItemWithPrice = [];
        inventoryItemWithPrice.push(key);
        inventoryItemWithPrice.push(obj[key]);
        objectAsArray.push(inventoryItemWithPrice);
    }
    return objectAsArray;
}
function switchItemsInArrayLocations(arr) {
    var switchedItemArray = [];
    for (var i = 0; i < arr.length; i++) {
        var currentItem = [];
        currentItem.push(arr[i][1]);
        currentItem.push(arr[i][0]);
        switchedItemArray.push(currentItem);
    }
    return switchedItemArray;
}
//# sourceMappingURL=Abonfire4.js.map