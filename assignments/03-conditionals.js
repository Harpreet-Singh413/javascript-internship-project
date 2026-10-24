// Assignment 3: Conditional Logic Implementation

const score = 85;
console.log(`Score: ${score}`);

// if...else validation
if (score < 0 || score > 100) {
  console.log("Invalid score. Must be between 0 and 100.");
} else {
  // switch statement for the letter grade
  let grade;
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:  grade = "A"; break;
    case 8:  grade = "B"; break;
    case 7:  grade = "C"; break;
    case 6:  grade = "D"; break;
    default: grade = "F";
  }
  console.log(`Grade: ${grade}`);

  // ternary operator
  const status = score >= 60 ? "Passed" : "Failed";
  console.log(`Status: ${status}`);
}
