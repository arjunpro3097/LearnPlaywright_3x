# JavaScript Concepts: Keywords, Identifiers, Literals, Operators

---

## 1. Keywords

### Definition
Keywords are **reserved words** in JavaScript that have a predefined meaning to the compiler/interpreter. They are part of the language syntax and **cannot** be used as identifiers (variable names, function names, etc.).

### Characteristics
- Always written in **lowercase** (except `true`, `false`, `null` which are reserved literals).
- Cannot be used as variable, function, or label names.
- Keywords form the building blocks of JavaScript syntax.

### Categories of Keywords

| Category | Keywords |
|----------|----------|
| **Variable Declaration** | `var`, `let`, `const` |
| **Control Flow** | `if`, `else`, `switch`, `case`, `default`, `break`, `continue` |
| **Looping** | `for`, `while`, `do` |
| **Function** | `function`, `return`, `async`, `await`, `yield` |
| **Error Handling** | `try`, `catch`, `finally`, `throw` |
| **Object/Class** | `class`, `extends`, `new`, `this`, `super`, `instanceof` |
| **Module** | `import`, `export`, `from` |
| **Logical/Type** | `typeof`, `delete`, `void`, `in` |
| **Reserved for Future** | `enum`, `interface`, `package`, `private`, `protected`, `public`, `static` |

### Examples
```javascript
let x = 10;       // 'let' is a keyword
if (x > 5) { }    // 'if' is a keyword
return x;         // 'return' is a keyword
```

> ⚠️ **Note**: `undefined` and `NaN` are **not keywords** — they are global properties. `Infinity` is also a global property.

---

## 2. Identifiers

### Definition
Identifiers are **names** given to programming elements like variables, functions, classes, objects, or labels so they can be referenced in code. Identifiers are user-defined.

### Naming Rules (Strict)
1. Must begin with:
   - A letter (`a–z`, `A–Z`), or
   - An underscore (`_`), or
   - A dollar sign (`$`).
2. Subsequent characters can include:
   - Letters, digits (`0–9`), underscores, or dollar signs.
3. **Cannot** be a reserved keyword.
4. **Case-sensitive**: `myVar` and `myvar` are different identifiers.
5. No spaces or special characters allowed (except `_` and `$`).

### Naming Conventions (Best Practices)

| Convention | Example | When to Use |
|------------|---------|-------------|
| **camelCase** | `firstName`, `getUserData` | Variables, functions |
| **PascalCase** | `UserProfile`, `HttpClient` | Classes, constructors |
| **UPPER_SNAKE_CASE** | `MAX_LIMIT`, `API_KEY` | Constants (true constants) |
| **_prefix** | `_privateVar`, `_internalFn` | Convention for "private" members |

### Examples
```javascript
let userName = "Alice";    // 'userName' is an identifier
const MAX_USERS = 100;     // 'MAX_USERS' is an identifier
function calculateSum() {} // 'calculateSum' is an identifier
class Car {}               // 'Car' is an identifier
```

### Valid vs Invalid Identifiers

| Valid | Invalid | Why Invalid |
|-------|---------|-------------|
| `name` | `123name` | Starts with digit |
| `_count` | `my-var` | Hyphen not allowed |
| `$price` | `let` | Reserved keyword |
| `data1` | `first name` | Space not allowed |
| `_` | `@data` | `@` not allowed |
| `$` | `void` | Reserved keyword |

---

## 3. Literals

### Definition
Literals are **fixed values** written directly in code. They represent data that does not change during program execution. Simply put, a literal is the actual value assigned to a variable.

### Types of Literals

#### 3.1 Numeric Literals
```javascript
10          // Integer (decimal)
3.14        // Floating-point
0xFF        // Hexadecimal (255 in decimal)
0b1010      // Binary (10 in decimal)
0o77        // Octal (63 in decimal)
1.5e3       // Scientific notation (1500)
```

#### 3.2 String Literals
```javascript
"Hello"        // Double-quoted string
'World'        // Single-quoted string
`Template`     // Template literal (backtick)
'She said "Hi"' // Single quotes allow double quotes inside
"He said 'Hi'"  // Double quotes allow single quotes inside
```

#### 3.3 Boolean Literals
```javascript
true
false
```

#### 3.4 Null Literal
```javascript
null   // Represents "no value" or "nothing" intentionally
```

#### 3.5 BigInt Literals
```javascript
9007199254740991n   // BigInt — append 'n' suffix
0xFFn               // BigInt hexadecimal
```

#### 3.6 Array Literals
```javascript
[1, 2, 3]           // Array literal
["a", "b", "c"]     // Array of strings
```

#### 3.7 Object Literals
```javascript
{ name: "Alice", age: 25 }   // Object literal
```

#### 3.8 Template Literals
```javascript
`Hello, ${name}!`   // Template literal with expression interpolation
```

---

## 4. Operators

### Definition
Operators are **symbols** that perform operations on operands (values/variables). They are the core mechanism for computation, comparison, assignment, and logic in JavaScript.

### Categories of Operators

#### 4.1 Arithmetic Operators
| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `6 / 3` | `2` |
| `%` | Modulus (remainder) | `5 % 2` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `let x=5; x++` | `6` |
| `--` | Decrement | `let x=5; x--` | `4` |

#### 4.2 Assignment Operators
| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

#### 4.3 Comparison Operators
| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Loose equality | `5 == "5"` | `true` |
| `===` | Strict equality | `5 === "5"` | `false` |
| `!=` | Loose inequality | `5 != "5"` | `false` |
| `!==` | Strict inequality | `5 !== "5"` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `5 <= 3` | `false` |
| `? :` | Ternary (conditional) | `a > b ? a : b` | returns larger |

#### 4.4 Logical Operators
| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&&` | AND | `true && false` | `false` |
| `||` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |
| `??` | Nullish coalescing | `null ?? 5` | `5` |

#### 4.5 Bitwise Operators
| Operator | Name | Example |
|----------|------|---------|
| `&` | AND | `5 & 1` → `1` |
| `|` | OR | `5 | 1` → `5` |
| `^` | XOR | `5 ^ 1` → `4` |
| `~` | NOT | `~5` → `-6` |
| `<<` | Left shift | `5 << 1` → `10` |
| `>>` | Right shift | `5 >> 1` → `2` |
| `>>>` | Zero-fill right shift | `5 >>> 1` → `2` |

#### 4.6 String Operator
```javascript
"Hello" + " " + "World"   // Concatenation → "Hello World"
```

#### 4.7 Type Operators
| Operator | Purpose |
|----------|---------|
| `typeof` | Returns type of operand as a string |
| `instanceof` | Checks if object is instance of a class |

#### 4.8 Unary Operators
| Operator | Purpose |
|----------|---------|
| `!` | Logical NOT |
| `typeof` | Type check |
| `void` | Evaluates expression and returns `undefined` |
| `delete` | Deletes object property |
| `+` / `-` | Unary plus/minus (coerce to number) |

### Operator Precedence (Highest to Lowest)
1. Grouping `()`
2. Member access `.` `[]`
3. Function call `()`
4. Increment/Decrement `++` `--`
5. Unary `+` `-` `!` `typeof` `void` `delete`
6. Exponentiation `**`
7. Multiplication/Division `*` `/` `%`
8. Addition/Subtraction `+` `-`
9. Comparison `<` `>` `<=` `>=`
10. Equality `==` `!=` `===` `!==`
11. AND `&&`
12. OR `||`
13. Nullish coalescing `??`
14. Ternary `?:`
15. Assignment `=` `+=` `-=` etc.
16. Comma `,`

---

## Quick Reference Table

| Concept | What It Is | Example |
|---------|-----------|---------|
| **Keyword** | Reserved word with built-in meaning | `let`, `if`, `return` |
| **Identifier** | User-defined name | `myVariable`, `calculateTotal` |
| **Literal** | Fixed value in source code | `42`, `"hello"`, `true` |
| **Operator** | Symbol that performs an operation | `+`, `===`, `&&` |
