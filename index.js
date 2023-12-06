function findEven(arr){

    // find even number
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          evenNumbers.push(arr[i]);
        }
      }    
    console.log(evenNumbers)
    
}

myArray = [34, 67, 23, 12, 89, 90, 668, 564, 132];

findEven(myArray);