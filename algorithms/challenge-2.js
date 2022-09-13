// # Challenge 2

// Implement a function fizzBuzz(input) that takes a number and retuns:
// "fizz": if the number is divisible by 3
// "buzz": if the number is divisible by 5
// "fizzbuzz": if the number is both divisible by 3 and 5
// number: if it is not divisible by 3 or 5

// Pseudocodes
//1. create fizzbuzz function with input parameter
//2. declare two variables fizz and buzz
//3. use logical statement to check the divisibility status of the parameters
//4.  return the variable fizz or buzz depending on the executed condition

//1. create another function, call it filterArray with array parameter
//2. declare two variables valid and invalid
//3. iterate through the array parameter
//4. set conditions for the values of iteration
//5. push the returned value into the variables
//6. return the valid to filter the array


function fizzBuzz(input){
    let fizz = "fizz";
    let buzz = "buzz";
    if(input % 3 == 0){
        return fizz;
    }else if(input % 5 == 0){
        return buzz;
    }else{
        return input;
    }
}

function filterArray(array){
    let valid = [];
    let invalid = [];
    for(i = 0; i < array.length; i++){
        if(array[i] >= 0){
            valid.push(array[i]);
        }else{
            invalid.push(array[i]);
        }
    }
    return valid;
}
console.log(filterArray(["$%^", 567, "&&&"]));
module.exports = fizzBuzz
