"use strict";
// Q9: Create a file contains 4 exported functions to apply all math calculations on two parameters
// Note: Math calculations function needed (addition, subtraction, division, Multiplication)
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = addition;
exports.subtraction = subtraction;
exports.multiplication = multiplication;
exports.division = division;
// Addition function
function addition(a, b) {
    return a + b;
}
// Subtraction function
function subtraction(a, b) {
    return a - b;
}
// Multiplication function
function multiplication(a, b) {
    return a * b;
}
// Division function
function division(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log('The Two Passed Numbers Are: ', 7, 4);
console.log("Addition function", addition(7, 4));
console.log("Subtraction function", subtraction(7, 4));
console.log("Multiplication function", multiplication(7, 4));
console.log("Division function", division(7, 4));
