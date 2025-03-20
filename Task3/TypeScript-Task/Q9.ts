// Q9: Create a file contains 4 exported functions to apply all math calculations on two parameters
// Note: Math calculations function needed (addition, subtraction, division, Multiplication)

// Addition function
export function addition(a: number, b: number): number {
  return a + b;
}

// Subtraction function
export function subtraction(a: number, b: number): number {
  return a - b;
}

// Multiplication function
export function multiplication(a: number, b: number): number {
  return a * b;
}

// Division function
export function division(a: number, b: number): number {
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
