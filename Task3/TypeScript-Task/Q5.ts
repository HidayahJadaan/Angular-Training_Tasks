// Q5: Create a function that receives an array of numbers then return only the positive numbers 
//then use it and print the result.

function getPositiveNumbers(arrayNum: number[]): number[]{
    
    return arrayNum.filter(num => num > 0);
}

const passedArr : number [] = [-5,8, -7, 4,3,0,2,-8,-1];
console.log(getPositiveNumbers(passedArr));