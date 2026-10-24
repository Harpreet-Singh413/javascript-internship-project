// Capstone: Interactive Product Inventory & Analytics Dashboard
// Run in a browser (prompt() works) via index.html, or in Node.js (defaults are used).

const ask = typeof prompt === "function"
  ? prompt
  : (msg, def) => def;   // Node fallback: use the default value

// ---------- 1. Data & Input Initialization ----------
console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// ---------- 3. Loops & Flow Control: retry on bad input ----------
function getValidProduct(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const rawName = ask("Enter new product name:", "Monitor");
    const rawPrice = ask("Enter product price ($):", "150");

    if (rawName === null || rawPrice === null) {   // user pressed Cancel
      console.log("Input cancelled.");
      break;
    }

    const name = rawName.trim();
    const price = Number(rawPrice);                // explicit conversion

    // ---------- 2. Conditional validation ----------
    if (name === "") {
      console.log(`Attempt ${attempt}: product name is missing.`);
      continue;
    }
    if (Number.isNaN(price) || price <= 0) {
      console.log(`Attempt ${attempt}: price must be a positive number.`);
      continue;
    }
    return { name, price };
  }
  return null;
}

const newProduct = getValidProduct();
if (newProduct) {
  inventory.push(newProduct);
  console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
} else {
  console.log("[No valid product added - continuing with existing inventory]");
}

// ---------- 2. Category badges using switch ----------
function getCategory(price) {
  switch (true) {
    case price < 50:  return "Budget";
    case price < 500: return "Standard";
    default:          return "Premium";
  }
}

// ---------- 4. Functions & Scope ----------
function calculateTotal(items) {                       // regular function
  let total = 0;                                       // local scope
  for (const item of items) total += item.price;
  return total;
}

const applyAdjustment = (amount, taxRate = 0, discountRate = 0) =>   // arrow function
  amount + amount * taxRate / 100 - amount * discountRate / 100;

// ---------- 5. Array Methods ----------
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("\n--- Financial Analytics ---");
const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordable = inventory.filter(item => item.price < 200).map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordable).replace(/,/g, ", ")}`);

const report = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(report).replace(/,/g, ", ")}`);

// Bonus: custom tax/discount example
console.log(`\n(Bonus) Total with 10% tax and 5% discount: $${applyAdjustment(totalValue, 10, 5).toFixed(2)}`);
