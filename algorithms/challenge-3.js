// Implement the function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.
// # Example
//     sumMix([9, 3, '7', '3']) to return 22
//     sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) to return 42
//     sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) to return 41
// Pseudocodes
// 1. Create function sumMix with arr parameter
// 2. declare two variables to collect the coerced elements, one for the coerced and the other for the summed numbers
// 3. iterate through the array
// 4. convert any string into number and push into first variable
// 4b. Iterate through the coerced variable
// 5. carry out an augmented addition on the iteration
// 6. return the second variable

function sumMix(arr) {
    let coercedNumber = [];
    let summedNumber = 0;
    for(i = 0; i < arr.length; i++){
        coercedNumber.push(Number(arr[i]));
    }
    for (i = 0; i < coercedNumber.length; i++){
        summedNumber += coercedNumber[i];
    }
    return summedNumber;
 }
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));
module.exports = sumMix