// main.js
import {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
} from "./modules/math.js";
import logger from "./modules/logger.js";

// Test the math functions
function testCalculator() {
  console.log("=== Calculator Tests ===");

  try {
    // Test addition
    let sum = add(10, 5);
    logger.log("add", 10, 5, sum);

    // Test subtraction
    let difference = subtract(10, 3);
    logger.log("subtract", 10, 3, difference);

    // Test multiplication
    let product = multiply(4, 7);
    logger.log("multiply", 4, 7, product);

    // Test division
    let quotient = divide(20, 4);
    logger.log("divide", 20, 4, quotient);

    // Test power
    let powerResult = power(2, 3);
    logger.log("power", 2, 3, powerResult);

    // Test square root
    let sqrtResult = squareRoot(16);
    logger.log("squareRoot", 16, null, sqrtResult);

    // Test error handling
    try {
      divide(10, 0);
    } catch (error) {
      console.log("Caught error:", error.message);
    }
  } catch (error) {
    console.error("Calculator error:", error.message);
  }

  console.log(`\nTotal operations logged: ${logger.getLogCount()}`);
}

// Run the tests when the page loads
document.addEventListener("DOMContentLoaded", testCalculator);