// Q1: Create a function to return the square of value based on the arrow function
// then use it to find the square of 5 values then print them.
const SquareCalc = (value: number): number => {
  return value * value;
};


const values : number[]= [1, 3, 6, 8,9];
const squaredValues : number[]= values.map(SquareCalc);

console.log(squaredValues);
// console.log(SquareCalc(5));
