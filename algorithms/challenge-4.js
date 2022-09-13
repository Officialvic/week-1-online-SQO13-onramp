// # Challenge 4

// Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. 
// It should return the average grade by comparing with the grade table
// 1-49: F
// 50-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// # Example
//     calculateGrade([80, 80, 70]) to  return 'C'
//     calculateGrade([19, 5, 42, 2, 77]) to return 'F'
//     calculateGrade([59, 80, 40, 2, 77]) to return 'E'
//     calculateGrade([89, 50, 40, 90, 77]) to return 'D'

function calculateGrade(marks) {
    let distinction = "A";
    let veryGood = "B";
    let credit = "C";
    let pass = "D";
    let low = "E";
    let fail = "F";
    let scores = [];
    for (i = 0; i < marks.length; i++){
        scores.push(marks[i]);
    }
    const average = scores.reduce((a,b) => a + b, 0) / scores.length;

    if( 1 >= average || average <= 49){
        return fail;
    } else if (50 >= average || average <= 59){
        return low;
    } else if (60 >= average|| average <= 69){
        return pass;
    } else if (70 >= average || average <= 79){
        return credit;
    } else if (80 >= average || average <= 89){
        return veryGood;
    } else if(90 >= average || average <= 100){
        return distinction;
    }
      else{
        return "no record";
      }
}
 console.log(calculateGrade([89, 50, 40, 90, 77]));
 
  module.exports =calculateGrade
