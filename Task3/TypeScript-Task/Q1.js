// Q1: Create a function to return the square of value based on the arrow function
// then use it to find the square of 5 values then print them.
var SquareCalc = function (value) {
    return value * value;
};
var values = [2, 4, 6, 8, 10];
var squaredValues = values.map(SquareCalc);
console.log(squaredValues);
// console.log(SquareCalc(5));
