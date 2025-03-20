// Q5: Create a function that receives an array of numbers then return only the positive numbers 
//then use it and print the result.
function getPositiveNumbers(arrayNum) {
    return arrayNum.filter(function (num) { return num > 0; });
}
var passedArr = [-5, 8, -7, 4, 3, 0, 2, -8, -1];
console.log(getPositiveNumbers(passedArr));
