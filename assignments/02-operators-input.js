// Assignment 2: Operators, Expressions, and Input Handling
// prompt() works in the browser. In Node.js it is unavailable, so defaults are used.

const ask = typeof prompt === "function" ? prompt : (msg, def) => def;

const subtotal = Number(ask("Enter bill amount ($):", "100"));        // explicit conversion
const tipPercent = Number(ask("Enter tip percentage (%):", "15"));

if (Number.isNaN(subtotal) || Number.isNaN(tipPercent)) {
  console.log("Invalid input: please enter numbers only.");
} else {
  let tip = subtotal * tipPercent / 100;   // arithmetic operators
  let total = subtotal;
  total += tip;                            // assignment operator

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercent}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
