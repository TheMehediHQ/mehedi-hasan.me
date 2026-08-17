---
title: 'ES6 Interview Questions & Answers — Complete Bengali & English Guide'
description: 'A complete Bengali and English guide to common ES6 and JavaScript interview questions, covering modern JavaScript concepts with code examples.'
pubDate: 'Dec 16 2025'
heroImage: '../../assets/es6.webp'
category: 'Tech'
tags: ['javascript', 'interview', 'es6']
---

# 📘 ES6 Interview Questions — English + Bengali

JavaScript interview তে ES6 concepts জানাটা essential। এই guide-এ common ES6 questions গুলো code examples সহ explain করা হয়েছে — English ও বাংলা দুটোতেই।

> **Tip:** শুধু মুখস্থ না করে concept বুঝে practice করো। Interview-এ follow-up questions আসবেই।

---

## 1. What is ES6? What features have you used?

**English:**
ES6 (ECMAScript 2015) is a major update to JavaScript that introduced modern, cleaner syntax and powerful features.

**বাংলা:**
ES6 (ECMAScript 2015) হলো JavaScript-এর একটি বড় update, যা modern syntax এবং powerful features নিয়ে এসেছে।

**Key Features:**

- `let` / `const` — block-scoped variables
- Arrow functions — shorter syntax, lexical `this`
- Template literals — string interpolation
- Destructuring — extract values easily
- Spread / Rest operators — `...` syntax
- Classes — OOP syntax
- Promises — async handling
- Modules — `import` / `export`

---

## 2. var vs let vs const

**English:** The main differences are in scoping, reassignment, and hoisting.

**বাংলা:** মূল পার্থক্য scoping, reassignment এবং hoisting-এ।

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Redeclare | ✅ Yes | ❌ No | ❌ No |
| Reassign | ✅ Yes | ✅ Yes | ❌ No |
| Hoisted | ✅ Yes (undefined) | ✅ Yes (TDZ) | ✅ Yes (TDZ) |

```js
var x = 1;    // function-scoped, can redeclare
let y = 2;    // block-scoped, can reassign
const z = 3;  // block-scoped, cannot reassign

if (true) {
  var a = 10;   // accessible outside this block
  let b = 20;   // only inside this block
  const c = 30; // only inside this block
}
console.log(a); // 10
console.log(b); // ReferenceError
```

> **Interview Tip:** `const` doesn't mean immutable — objects and arrays declared with `const` can still be mutated.

---

## 3. What are Default Parameters?

**English:** Default parameters let functions use predefined values when no argument is passed.

**বাংলা:** Default parameter দিয়ে function-এ argument না পাঠালেও একটি predefined value ব্যবহার করা যায়।

```js
// ❌ Old way
function greet(name) {
  name = name || 'Guest';
  console.log(`Hello ${name}`);
}

// ✅ ES6 way
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}

greet();        // "Hello Guest"
greet('Mehedi'); // "Hello Mehedi"
```

---

## 4. Spread Operator vs Rest Operator

Both use `...` syntax but serve opposite purposes.

দুটোতেই `...` syntax, কিন্তু কাজ উল্টো।

| Operator | Purpose | Example |
|----------|---------|---------|
| **Spread** | Expands elements | `[...arr]`, `{...obj}` |
| **Rest** | Collects elements | `function(...args)` |

### Spread — Expands values

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Rest — Collects values

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4); // 10
```

---

## 5. Template Literals

**English:** Template literals use backticks and allow embedded expressions with `${}`.

**বাংলা:** Template literal backtick ব্যবহার করে এবং `${}` দিয়ে string-এ variable বসানো যায়।

```js
const name = 'Mehedi';
const age = 24;

// ❌ Old way
const msg = 'Hello ' + name + ', you are ' + age + ' years old';

// ✅ ES6 way
const msg = `Hello ${name}, you are ${age} years old`;

// Multi-line strings
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;
```

---

## 6. Destructuring

**English:** Destructuring extracts values from arrays or properties from objects into variables.

**বাংলা:** Destructuring দিয়ে array বা object থেকে সহজে value বের করে variable-এ রাখা যায়।

### Object Destructuring

```js
const user = { name: 'Mehedi', age: 24, city: 'Dhaka' };

// Extract specific properties
const { name, city } = user;
console.log(name); // "Mehedi"
console.log(city); // "Dhaka"

// Rename variables
const { name: userName } = user;

// Default values
const { country = 'BD' } = user;
```

### Array Destructuring

```js
const colors = ['red', 'green', 'blue'];

const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Skip elements
const [, , third] = colors; // "blue"

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

---

## 7. Arrow Functions vs Regular Functions

**English:** Arrow functions have shorter syntax and inherit `this` from the parent scope.

**বাংলা:** Arrow function-এ syntax ছোট এবং এটি parent scope থেকে `this` inherit করে।

| Feature | Regular Function | Arrow Function |
|---------|-----------------|----------------|
| Syntax | `function() {}` | `() => {}` |
| `this` | Own context | Inherited from parent |
| `arguments` | Available | Not available |
| `new` | Can be constructor | Cannot be constructor |
| `prototype` | Has it | Doesn't have it |

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// this keyword difference
const obj = {
  name: 'Mehedi',
  regular: function() {
    console.log(this.name); // "Mehedi"
  },
  arrow: () => {
    console.log(this.name); // undefined (inherits from parent)
  }
};
```

> **Interview Tip:** Don't use arrow functions for object methods or event handlers where you need `this`.

---

## 8. What is a Higher-Order Function?

**English:** A function that takes another function as an argument, returns a function, or both.

**বাংলা:** যে function অন্য function-কে argument হিসেবে নেয় অথবা function return করে।

```js
// Takes a function as argument
function operate(a, b, fn) {
  return fn(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

operate(5, 3, add);      // 8
operate(5, 3, multiply); // 15

// Common built-in higher-order functions
const numbers = [1, 2, 3, 4, 5];

numbers.filter(n => n > 3);    // [4, 5]
numbers.map(n => n * 2);       // [2, 4, 6, 8, 10]
numbers.reduce((sum, n) => sum + n, 0); // 15
```

---

## 9. What is an IIFE?

**English:** IIFE (Immediately Invoked Function Expression) runs immediately after creation.

**বাংলা:** IIFE হলো এমন function যা define হওয়ার সাথে সাথে execute হয়ে যায়।

```js
// Traditional IIFE
(function() {
  const secret = 'hidden';
  console.log('Runs immediately!');
})();

// Arrow function IIFE
(() => {
  console.log('Also runs immediately!');
})();

// With parameters
((name) => {
  console.log(`Hello ${name}`);
})('Mehedi');

// Why? — Creates isolated scope, avoids polluting global namespace
```

---

## 10. Promise & Async/Await

**English:** Promises handle asynchronous operations. `async/await` is syntactic sugar over promises.

**বাংলা:** Promise asynchronous operations handle করে। `async/await` হলো promise-এর উপর cleaner syntax।

```js
// Callback hell ❌
getData(function(a) {
  getMore(a, function(b) {
    getEvenMore(b, function(c) {
      console.log(c);
    });
  });
});

// Promise chain ✅
getData()
  .then(a => getMore(a))
  .then(b => getEvenMore(b))
  .then(c => console.log(c))
  .catch(err => console.error(err));

// Async/Await ✅✅ (cleanest)
async function fetchData() {
  try {
    const a = await getData();
    const b = await getMore(a);
    const c = await getEvenMore(b);
    console.log(c);
  } catch (err) {
    console.error(err);
  }
}
```

---

## 11. Classes in ES6

**English:** ES6 classes provide cleaner syntax for creating objects and handling inheritance.

**বাংলা:** ES6 class object তৈরি এবং inheritance handle করার জন্য cleaner syntax দেয়।

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // "Rex barks"
```

---

## 12. Modules — Import / Export

**English:** ES6 modules allow you to split code into separate files and import only what you need.

**বাংলা:** ES6 modules দিয়ে code আলাদা file-এ ভাগ করা যায় এবং দরকারি অংশ import করা যায়।

```js
// math.js — Named exports
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// user.js — Default export
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// app.js — Importing
import User from './user.js';
import { PI, add } from './math.js';

// Rename on import
import { add as sum } from './math.js';

// Import everything
import * as MathUtils from './math.js';
```

---

## 13. Map vs Filter vs Reduce

| Method | Purpose | Returns |
|--------|---------|---------|
| `map()` | Transform each element | New array (same length) |
| `filter()` | Keep matching elements | New array (shorter) |
| `reduce()` | Combine all into one value | Single value |

```js
const products = [
  { name: 'Laptop', price: 50000 },
  { name: 'Phone', price: 20000 },
  { name: 'Tablet', price: 15000 },
];

// map — extract names
const names = products.map(p => p.name);
// ['Laptop', 'Phone', 'Tablet']

// filter — expensive items
const expensive = products.filter(p => p.price > 20000);
// [{ name: 'Laptop', price: 50000 }]

// reduce — total price
const total = products.reduce((sum, p) => sum + p.price, 0);
// 85000
```

---

## 14. Local Storage vs Session Storage vs Cookies

| Feature | Local Storage | Session Storage | Cookies |
|---------|--------------|-----------------|---------|
| Expires | Never (manual) | Tab close | Set date |
| Size | ~5MB | ~5MB | ~4KB |
| Sent to server | ❌ No | ❌ No | ✅ Yes |
| Access | Client only | Client only | Client + Server |

```js
// Local Storage
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');

// Session Storage
sessionStorage.setItem('token', 'abc123');

// Cookies
document.cookie = 'user=Mehedi; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/';
```

---

## 15. Call by Value vs Call by Reference

**English:** Primitives are passed by value, objects/arrays by reference.

**বাংলা:** Primitive data value হিসেবে pass হয়, object/array reference হিসেবে।

```js
// Call by Value (primitives)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — original unchanged

// Call by Reference (objects)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 — original changed!

// How to avoid? Use spread
let copy = { ...obj1 };
copy.value = 30;
console.log(obj1.value); // 20 — safe
```

---

## 16. Ternary Operator

**English:** Shorthand for `if-else` conditions.

**বাংলা:** `if-else` লেখার short syntax।

```js
// Syntax: condition ? valueIfTrue : valueIfFalse

const age = 20;
const status = age >= 18 ? 'Adult' : 'Minor';

// Nested (avoid in production)
const grade = score >= 80 ? 'A'
            : score >= 60 ? 'B'
            : score >= 40 ? 'C'
            : 'F';

// With function calls
isLoggedIn ? showDashboard() : showLogin();
```

---

## 17. Prototype Chain

**English:** JavaScript's mechanism for object inheritance — objects inherit from other objects through the prototype chain.

**বাংলা:** JavaScript-এর inheritance mechanism — একটি object অন্য object থেকে properties ও methods inherit করে।

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const me = new Person('Mehedi');
me.greet(); // "Hi, I'm Mehedi"

// Prototype chain:
// me → Person.prototype → Object.prototype → null

console.log(me.hasOwnProperty('name')); // true
console.log(me.hasOwnProperty('greet')); // false (inherited)
```

---

## 18. How to Debug JavaScript?

**English:** Use browser DevTools, console methods, breakpoints, and network inspection.

**বাংলা:** Browser DevTools, console methods, breakpoints এবং Network tab ব্যবহার করা যায়।

**Essential Tools:**

- `console.log()` — basic logging
- `console.table()` — display arrays/objects as table
- `console.time()` / `console.timeEnd()` — measure performance
- `debugger` — pause execution in code
- **Breakpoints** — pause at specific lines in DevTools
- **Network tab** — inspect API calls
- **Sources tab** — step through code

```js
// Useful console methods
console.log('Simple log');
console.warn('Warning message');
console.error('Error message');
console.table([{ name: 'Mehedi', age: 24 }]);
console.time('timer');
// ... some code
console.timeEnd('timer'); // "timer: 0.5ms"

// Debugger statement
function calculate(x) {
  debugger; // execution pauses here in DevTools
  return x * 2;
}
```

---

## 19. What is an API? GET vs POST

**English:** An API (Application Programming Interface) allows different systems to communicate.

**বাংলা:** API বিভিন্ন software system-এর মধ্যে communication করতে সাহায্য করে।

| Feature | GET | POST |
|---------|-----|------|
| Purpose | Retrieve data | Send/Create data |
| Data location | URL params | Request body |
| Cacheable | ✅ Yes | ❌ No |
| Idempotent | ✅ Yes | ❌ No |
| Data size limit | Yes (~2048 chars) | No limit |

```js
// GET — fetch data
const response = await fetch('https://api.example.com/users');
const users = await response.json();

// POST — send data
const response = await fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Mehedi', email: 'hello@mehedi-hasan.me' }),
});
```

---

## 20. Array vs LinkedList

| Feature | Array | LinkedList |
|---------|-------|------------|
| Access | O(1) by index | O(n) traversal |
| Insert (start) | O(n) | O(1) |
| Insert (end) | O(1) amortized | O(n) without tail |
| Memory | Contiguous | Scattered (nodes) |
| Size | Fixed/Dynamic | Always dynamic |

> **When to use what?**
> - **Array** — fast lookups, iteration, most common use cases
> - **LinkedList** — frequent insertions/deletions at the beginning

---

## Final Thoughts

ES6 concepts JavaScript interview-এ বারবার আসে। শুধু definition না, **code example সহ practice করো**। Interview-এ follow-up questions আসবেই, তাই concept clearly বুঝো।

**Preparation Checklist:**
- ✅ `let` / `const` / `var` differences
- ✅ Arrow functions & `this` behavior
- ✅ Destructuring (object + array)
- ✅ Spread vs Rest
- ✅ Promises & async/await
- ✅ Array methods (map, filter, reduce)
- ✅ ES6 classes & inheritance
- ✅ Modules (import/export)
