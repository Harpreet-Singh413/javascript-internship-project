// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function rectAreaStandard(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectAreaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectAreaArrow(10, 3)}`);

// Scope demonstration
function scopeDemo() {
  var functionVar = "I live in the whole function";
  if (true) {
    let blockVar = "I live only inside this block";
  }
  console.log(blockVar);      // let is NOT accessible here -> ReferenceError
}

try {
  scopeDemo();
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}
