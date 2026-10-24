# JavaScript Internship Project

Student assignments (1–6) and the capstone project **Interactive Product Inventory & Analytics Dashboard**.

## Structure

```
assignments/
  01-variables-datatypes.js
  02-operators-input.js
  03-conditionals.js
  04-loops.js
  05-functions-scope.js
  06-arrays-objects.js
capstone/
  inventory.js
index.html
```

## How to Run

**Node.js** (prompts fall back to default values):
```bash
node assignments/01-variables-datatypes.js
node capstone/inventory.js
```

**Browser** (real `prompt()` dialogs): open `index.html`, then open DevTools → Console.

## Capstone Concepts Covered

| Requirement | Implementation |
|---|---|
| Data & input | `prompt()` + `Number()` conversion, array of objects |
| Control flow | `if...else` validation, `switch` category badges (Budget / Standard / Premium) |
| Loops | retry loop with `break` / `continue` for bad input |
| Functions & scope | `calculateTotal()` (regular), `applyAdjustment()` (arrow), local scoping |
| Array methods | `forEach`, `filter`, `map` |

## Sample Output

```
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]
```
