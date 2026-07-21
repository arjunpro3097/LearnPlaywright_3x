// ============================================================
// JAVASCRIPT CONCEPTS: keywords, identifiers, literals, operators
// Individual examples for each concept
// ============================================================

// ============================================================
// 1. KEYWORDS
//    Reserved words that are part of the JavaScript language.
//    They CANNOT be used as identifiers (variable/function names).
// ============================================================

// Variable declaration keywords
const exampleKeywordConst = "I am declared with 'const'";
let exampleKeywordLet = "I am declared with 'let'";
var exampleKeywordVar = "I am declared with 'var'";

// Control flow keywords: if, else
if (true) {
  console.log("'if' is a keyword — this block runs when condition is true");
} else {
  console.log("'else' is a keyword — this block runs when condition is false");
}

// Loop keyword: for
for (let i = 0; i < 3; i++) {
  // 'for' is a keyword
  console.log("'for' loop iteration:", i);
}

// Function keyword
function exampleFunction() {
  // 'function' is a keyword
  console.log("'function' is a keyword used to declare a function");
}
exampleFunction();

// Return keyword
function add(a, b) {
  return a + b; // 'return' is a keyword
}
console.log("'return' keyword result:", add(2, 3));

// Class keyword
class ExampleClass {
  // 'class' is a keyword
  constructor(name) {
    this.name = name; // 'this' is a keyword
  }
  greet() {
    console.log("Hello from", this.name);
  }
}
const obj = new ExampleClass("ExampleClass"); // 'new' is a keyword
obj.greet();

// Error handling keywords: try, catch, finally
try {
  // 'try' is a keyword
  throw new Error("Something went wrong"); // 'throw' is a keyword
} catch (error) {
  // 'catch' is a keyword
  console.log("'catch' caught an error:", error.message);
} finally {
  // 'finally' is a keyword
  console.log("'finally' always runs");
}

// Type checking keyword: typeof
console.log("'typeof' keyword returns:", typeof exampleKeywordConst);

// Membership check keyword: instanceof
console.log("'instanceof' keyword:", obj instanceof ExampleClass); // true

// Async/Await keywords
async function fetchData() {
  // 'async' is a keyword
  console.log("'async' keyword makes a function return a Promise");
  return "data";
}
fetchData().then((result) =>
  console.log("'await' keyword waits for a Promise:", result)
);

// Switch keyword
let fruit = "apple";
switch (fruit) {
  // 'switch' is a keyword
  case "apple": // 'case' is a keyword
    console.log("'switch/case' keywords — matched apple");
    break; // 'break' is a keyword
  default: // 'default' is a keyword
    console.log("No match");
}

console.log("\n--- End of Keywords Section ---\n");

// ============================================================
// 2. IDENTIFIERS
//    User-defined names given to variables, functions, classes, etc.
//    Follow strict naming rules.
// ============================================================

// --- Valid Identifiers ---

// camelCase (standard for variables & functions)
let firstName = "Alice"; // 'firstName' is an identifier
let lastName = "Johnson"; // 'lastName' is an identifier
let userAge = 30; // 'userAge' is an identifier

// Starting with underscore (convention for "private" or internal)
let _privateValue = 42; // '_privateValue' is a valid identifier
let _internalData = "hidden"; // '_internalData' is a valid identifier

// Starting with dollar sign (common in jQuery / generated code)
let $element = "button"; // '$element' is a valid identifier
let $ = "dollar identifier"; // '$' alone is a valid identifier

// Identifiers with digits (only after first character)
let data1 = "data one"; // 'data1' is a valid identifier
let version2 = "v2"; // 'version2' is a valid identifier

// Case sensitivity demo
let myVar = "lowercase v";
let myvar = "different identifier (lowercase var)";
console.log("Case sensitivity — myVar:", myVar);
console.log("Case sensitivity — myvar:", myvar);
// These are TWO DIFFERENT identifiers!

// Function identifier
function calculateTotal(price, tax) {
  // 'calculateTotal' is an identifier
  // 'price' and 'tax' are parameter identifiers
  return price + tax;
}
console.log("Function identifier calculateTotal:", calculateTotal(100, 20));

// Class identifier (PascalCase convention)
class UserProfile {
  // 'UserProfile' is an identifier
  constructor(userName) {
    // 'userName' is a parameter identifier
    this.userName = userName;
  }
}
const profile = new UserProfile("Bob");
console.log("Class identifier UserProfile:", profile.userName);

// Constant identifier (UPPER_SNAKE_CASE convention)
const MAX_LOGIN_ATTEMPTS = 5; // 'MAX_LOGIN_ATTEMPTS' is an identifier
const API_BASE_URL = "https://api.example.com"; // 'API_BASE_URL' is an identifier
console.log("Constant identifiers:", MAX_LOGIN_ATTEMPTS, API_BASE_URL);

// Single-character identifiers (valid but not recommended)
let a = 10;
let b = 20;
console.log("Single-char identifiers — a + b =", a + b);

// --- INVALID Identifiers (commented out — would cause errors) ---

// let 123name = "invalid";   // ERROR: starts with digit
// let my-var = "invalid";    // ERROR: hyphen not allowed
// let first name = "invalid"; // ERROR: space not allowed
// let @data = "invalid";     // ERROR: @ not allowed
// let void = "invalid";      // ERROR: 'void' is a reserved keyword
// let class = "invalid";     // ERROR: 'class' is a reserved keyword

console.log("\n--- End of Identifiers Section ---\n");

// ============================================================
// 3. LITERALS
//    Fixed values written directly in the source code.
//    The actual value, not a reference.
// ============================================================

// --- Numeric Literals ---
console.log("--- Numeric Literals ---");
console.log("Integer literal:", 42);
console.log("Floating-point literal:", 3.14159);
console.log("Negative literal:", -10);
console.log("Hexadecimal literal:", 0xff); // 255
console.log("Binary literal:", 0b1010); // 10
console.log("Octal literal:", 0o77); // 63
console.log("Scientific notation:", 1.5e3); // 1500

// --- BigInt Literals ---
console.log("\n--- BigInt Literals ---");
console.log("BigInt literal:", 9007199254740991n);
console.log("BigInt hex:", 0xffn);

// --- String Literals ---
console.log("\n--- String Literals ---");
console.log("Double-quoted string:", "Hello World");
console.log("Single-quoted string:", 'JavaScript');
console.log("Empty string:", "");
console.log("String with quotes:", "She said \"Hello\"");

// --- Boolean Literals ---
console.log("\n--- Boolean Literals ---");
console.log("Boolean true:", true);
console.log("Boolean false:", false);

// --- Null Literal ---
console.log("\n--- Null Literal ---");
let emptyValue = null;
console.log("Null literal:", emptyValue);

// --- Undefined (Not a literal — it's a global property) ---
let notDefined;
console.log("Undefined (not a literal, but often grouped here):", notDefined);

// --- Array Literals ---
console.log("\n--- Array Literals ---");
console.log("Array literal [1, 2, 3]:", [1, 2, 3]);
console.log("Mixed array:", ["apple", 42, true, null]);

// --- Object Literals ---
console.log("\n--- Object Literals ---");
const person = { name: "Alice", age: 25, isStudent: false };
console.log("Object literal:", person);

// --- Template Literals (ES6) ---
console.log("\n--- Template Literals ---");
const lang = "JavaScript";
const year = 2026;
console.log(`Template literal: I am learning ${lang} in ${year}.`);

// --- RegExp Literal ---
console.log("\n--- RegExp Literal ---");
const regex = /hello/i; // 'hello' pattern, case-insensitive
console.log("RegExp literal:", regex);

console.log("\n--- End of Literals Section ---\n");

// ============================================================
// 4. OPERATORS
//    Symbols that perform operations on operands.
// ============================================================

console.log("--- Arithmetic Operators ---");
let a1 = 10,
  b1 = 3;
console.log("Addition (+):          10 + 3  =", a1 + b1);
console.log("Subtraction (-):       10 - 3  =", a1 - b1);
console.log("Multiplication (*):    10 * 3  =", a1 * b1);
console.log("Division (/):          10 / 3  =", a1 / b1);
console.log("Modulus (%):           10 % 3  =", a1 % b1);
console.log("Exponentiation (**):   2 ** 3  =", 2 ** 3);

let counter = 5;
console.log("\nIncrement (++):");
console.log("  Post-increment (counter++):", counter++); // 5 (then 6)
console.log("  Now counter is:", counter);

let counter2 = 5;
console.log("  Pre-increment (++counter2):", ++counter2); // 6 (immediately)

let counter3 = 5;
console.log("Decrement (--):");
console.log("  Post-decrement (counter3--):", counter3--); // 5 (then 4)
console.log("  Now counter3 is:", counter3);

console.log("\n--- Assignment Operators ---");
let x = 10; // Simple assignment
console.log("Simple assignment (x = 10):", x);

x += 5; // x = x + 5
console.log("Addition assignment (x += 5):", x); // 15

x -= 3; // x = x - 3
console.log("Subtraction assignment (x -= 3):", x); // 12

x *= 2; // x = x * 2
console.log("Multiplication assignment (x *= 2):", x); // 24

x /= 4; // x = x / 4
console.log("Division assignment (x /= 4):", x); // 6

x %= 4; // x = x % 4
console.log("Modulus assignment (x %= 4):", x); // 2

x **= 3; // x = x ** 3
console.log("Exponentiation assignment (x **= 3):", x); // 8

console.log("\n--- Comparison Operators ---");
console.log("Loose equality (5 == '5'):", 5 == "5"); // true (type coercion)
console.log("Strict equality (5 === '5'):", 5 === "5"); // false (no coercion)
console.log("Loose inequality (5 != '5'):", 5 != "5"); // false
console.log("Strict inequality (5 !== '5'):", 5 !== "5"); // true
console.log("Greater than (10 > 5):", 10 > 5);
console.log("Less than (10 < 5):", 10 < 5);
console.log("Greater or equal (10 >= 10):", 10 >= 10);
console.log("Less or equal (10 <= 5):", 10 <= 5);

console.log("\nTernary operator (condition ? trueVal : falseVal):");
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(`  age = ${age} → status:`, status);

console.log("\n--- Logical Operators ---");
console.log("AND (true && false):", true && false);
console.log("OR (true || false):", true || false);
console.log("NOT (!true):", !true);
console.log("Nullish coalescing (null ?? 'default'):", null ?? "default");
console.log("Nullish coalescing (0 ?? 'default'):", 0 ?? "default"); // 0 (not null/undefined)
console.log("Nullish coalescing ('' ?? 'default'):", "" ?? "default"); // "" (not null/undefined)

console.log("\n--- Type Operators ---");
console.log("typeof 'hello':", typeof "hello");
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof null:", typeof null); // "object" (historical JS bug)
console.log("typeof undefined:", typeof undefined);
console.log("typeof []:", typeof []);
console.log("typeof {}:", typeof {});
console.log("typeof function:{}", typeof function () {});

class Animal {}
class Dog extends Animal {}
const pet = new Dog();
console.log("pet instanceof Dog:", pet instanceof Dog);
console.log("pet instanceof Animal:", pet instanceof Animal);

console.log("\n--- String Operator (+) ---");
console.log("Concatenation: " + "'Hello' + ' ' + 'World':", "Hello" + " " + "World");

console.log("\n--- Bitwise Operators ---");
console.log("Bitwise AND (5 & 1):", 5 & 1); // 101 & 001 = 001 → 1
console.log("Bitwise OR  (5 | 1):", 5 | 1); // 101 | 001 = 101 → 5
console.log("Bitwise XOR (5 ^ 1):", 5 ^ 1); // 101 ^ 001 = 100 → 4
console.log("Bitwise NOT (~5):", ~5);
console.log("Left shift (5 << 1):", 5 << 1); // 1010 → 10
console.log("Right shift (5 >> 1):", 5 >> 1); // 10 → 2

console.log("\n--- Unary Operators ---");
let val = 10;
console.log("Unary plus (+val):", +val);
console.log("Unary negation (-val):", -val);
console.log("Logical NOT (!true):", !true);

console.log("\n--- Operator Precedence Demo ---");
console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14 (multiplication first)
console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20 (parentheses first)
console.log("true || (false && false):", true || (false && false)); // true (&& evaluated first)

console.log("\n--- End of Operators Section ---");

// ============================================================
// SUMMARY: Run this file with Node.js
// ============================================================
// $ node examples.js
