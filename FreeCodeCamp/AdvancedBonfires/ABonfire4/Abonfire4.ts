 function updateInventory(arr1, arr2) {
     var arrayOneAsObject = inventoryArrayAsObject(arr1, {});
     var arrayPlusNewInventory = inventoryArrayAsObject(arr2, arrayOneAsObject);
     return inventoryObjectToArray(arrayPlusNewInventory); //need to alphabetize
 }

 function inventoryArrayAsObject(arr, obj){
     var arrayAsObject = obj;
     for (var i = 0; i < arr.length; i++){
         var currentItem = arr[i][1];
         if (arrayAsObject[currentItem]){
             arrayAsObject[currentItem] += arr[i][0];
         } else{
             arrayAsObject[currentItem] = arr[i][0];   
         }
     }
     return arrayAsObject;
 }

 function inventoryObjectToArray(obj){
     var objectAsArray = [];
     for (var key in obj){
         var inventoryItemWithPrice = [];
         inventoryItemWithPrice.push(obj[key]);
         inventoryItemWithPrice.push(key);
         objectAsArray.push(inventoryItemWithPrice);
     }
     return objectAsArray;
 }