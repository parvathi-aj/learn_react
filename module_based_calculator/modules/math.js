// modules/math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export function power(base, exponent) {
  return Math.pow(base, exponent);
}

export function squareRoot(number) {
  if (number < 0) {
    throw new Error("Cannot calculate square root of negative number");
  }
  return Math.sqrt(number);
}