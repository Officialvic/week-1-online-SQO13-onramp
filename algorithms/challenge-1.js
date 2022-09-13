// # Challenge 1
// Implement a function countTruthy(arr) that takes an array and returns the number of truthy values
// Pseudocodes
// 1. declare a function of countTruthy with parameter(arr)
// 2. Assess the elements in the array using for loop
// 3. compare each elements assesed to the global variable array using logical statements
// 4. store the elements that returns true into a local variable truthy and falsy
// 5. Count the number of truthy values and output the value.



function countTruthy(arr) {
    let truthy = [];
    let falsy =[];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            truthy.push(arr[i]);
        } else{
            falsy.push(arr[i]);
        }
    }
    return truthy.length;
}
console.log((countTruthy([16, 33, null, 2]))); // 3
module.exports = countTruthy

