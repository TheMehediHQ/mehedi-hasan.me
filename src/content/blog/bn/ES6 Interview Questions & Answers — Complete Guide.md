---
title: 'ES6 ইন্টারভিউ প্রশ্ন ও উত্তর — পূর্ণাঙ্গ গাইড'
description: 'মডার্ন জাভাস্ক্রিপ্ট ও ES6-এর বহুল জিজ্ঞাসিত ইন্টারভিউ প্রশ্ন ও উত্তরের একটি সম্পূর্ণ গাইডলাইন, কোড উদাহরণসহ।'
pubDate: 'Dec 16 2025'
heroImage: '../../../assets/es6.webp'
category: 'Tech'
tags: ['javascript', 'interview', 'es6']
lang: 'bn'
---

# ES6 ইন্টারভিউ প্রশ্ন ও উত্তর — পূর্ণাঙ্গ গাইড

জাভাস্ক্রিপ্ট ইন্টারভিউগুলোতে ES6-এর বিভিন্ন কনসেপ্টের ওপর ব্যাপকভাবে প্রশ্ন করা হয়। এই গাইডে কোড উদাহরণসহ বহুল জিজ্ঞাসিত ES6 প্রশ্ন ও উত্তর সহজ ভাষায় ব্যাখ্যা করা হয়েছে।

> **টিপস:** শুধু সংজ্ঞা মুখস্থ করবেন না—কনসেপ্ট গভীরভাবে বোঝার পাশাপাশি প্র্যাকটিস করুন। কারণ ইন্টারভিউতে ফলো-আপ প্রশ্ন আসার সম্ভাবনাই বেশি।

---

## ১. ES6 কী? আপনি এর কোন কোন ফিচার ব্যবহার করেছেন?

ES6 (ECMAScript 2015) হলো জাভাস্ক্রিপ্টের একটি বড় ও যুগান্তকারী আপডেট, যা কোডিংয়ের পরিচ্ছন্ন সিনট্যাক্স এবং শক্তিশালী আধুনিক ফিচার যুক্ত করেছে।

**প্রধান ফিচারসমূহ:**

- `let` / `const` — ব্লক-স্কোপড ভেরিয়েবল
- অ্যারো ফাংশনস (Arrow functions) — সংক্ষিপ্ত সিনট্যাক্স ও লেক্সিক্যাল `this`
- টেমপ্লেট লিটারেলস (Template literals) — স্ট্রিং ইন্টারপোলেশন
- ডিসট্রাকচারিং (Destructuring) — সহজে অবজেক্ট ও অ্যারে থেকে মান নেওয়া
- স্প্রেড / রেস্ট অপারেটর — `...` সিনট্যাক্স
- ক্লাসেস (Classes) — অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং সিনট্যাক্স
- প্রমিজেস (Promises) — অ্যাসিনক্রোনাস কাজ নিয়ন্ত্রণ
- মডিউলস (Modules) — `import` ও `export` ব্যবস্থাপনা

---

## ২. var vs let vs const

মূল পার্থক্যগুলো মূলত স্কোপ (Scoping), রি-অ্যাসাইনমেন্ট (Reassignment) এবং হোয়েস্টিং (Hoisting)-এর ওপর নির্ভর করে।

| ফিচার | `var` | `let` | `const` |
|---------|-------|-------|---------|
| স্কোপ (Scope) | ফাংশন-লেভেল | ব্লক-লেভেল | ব্লক-লেভেল |
| রি-ডিক্লেয়ার (Redeclare) | সম্ভব | অসম্ভব | অসম্ভব |
| রি-অ্যাসাইন (Reassign) | সম্ভব | সম্ভব | অসম্ভব |
| হোয়েস্টিং (Hoisted) | হ্যাঁ (মান undefined) | হ্যাঁ (Temporal Dead Zone) | হ্যাঁ (Temporal Dead Zone) |

```js
var x = 1;    // ফাংশন স্কোপড, পুনরায় ডিক্লেয়ার করা যায়
let y = 2;    // ব্লক স্কোপড, মান পরিবর্তন করা যায়
const z = 3;  // ব্লক স্কোপড, মান পরিবর্তন করা যায় না

if (true) {
  var a = 10;   // ব্লকের বাইরে থেকেও অ্যাক্সেসযোগ্য
  let b = 20;   // কেবল এই ব্লকের ভেতরেই সীমাবদ্ধ
  const c = 30; // কেবল এই ব্লকের ভেতরেই সীমাবদ্ধ
}
console.log(a); // 10
console.log(b); // ReferenceError
```

> **ইন্টারভিউ টিপ:** `const` মানেই ডেটা পুরোপুরি ইমিউটেবল (অপরিবর্তনযোগ্য) নয়—`const` দিয়ে ডিক্লেয়ার করা Object বা Array-এর অভ্যন্তরীণ প্রোপার্টি পরিবর্তন করা সম্ভব।

---

## ৩. ডিফল্ট প্যারামিটারস (Default Parameters) কী?

ফাংশনে কোনো আর্গুমেন্ট পাস না করা হলে বা `undefined` থাকলে ফাংশন যেন পূর্বনির্ধারিত একটি ডিফল্ট মান ব্যবহার করতে পারে, সেজন্য ডিফল্ট প্যারামিটার ব্যবহৃত হয়।

```js
// পুরনো পদ্ধতি
function greet(name) {
  name = name || 'Guest';
  console.log(`Hello ${name}`);
}

// ES6 পদ্ধতি
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}

greet();        // "Hello Guest"
greet('Mehedi'); // "Hello Mehedi"
```

---

## ৪. স্প্রেড অপারেটর (Spread) বনাম রেস্ট অপারেটর (Rest)

উভয় ক্ষেত্রে `...` সিনট্যাক্স ব্যবহৃত হলেও এদের কাজ সম্পূর্ণ বিপরীত।

| অপারেটর | কাজ | উদাহরণ |
|----------|---------|---------|
| **Spread** | উপাদানগুলোকে ছড়িয়ে (Expand) দেয় | `[...arr]`, `{...obj}` |
| **Rest** | উপাদানগুলোকে একত্রিত (Collect) করে | `function(...args)` |

### Spread — মানগুলো উন্মুক্ত করে

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Rest — মানগুলো গুচ্ছভুক্ত করে

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4); // 10
```

---

## ৫. টেমপ্লেট লিটারেলস (Template Literals)

টেমপ্লেট লিটারেলসে ব্যাকটিক (`` ` ``) ব্যবহার করা হয় এবং `${}` দিয়ে ভেরিয়েবল বা এক্সপ্রেশন সরাসরি স্ট্রিংয়ের ভেতরে এম্বেড করা যায়।

```js
const name = 'Mehedi';
const age = 24;

// পুরনো পদ্ধতি
const msg = 'Hello ' + name + ', you are ' + age + ' years old';

// ES6 পদ্ধতি
const msg = `Hello ${name}, you are ${age} years old`;

// মাল্টি-লাইন স্ট্রিং
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;
```

---

## ৬. ডিসট্রাকচারিং (Destructuring)

অ্যারে থেকে মান বা অবজেক্ট থেকে নির্দিষ্ট প্রোপার্টি সহজে আলাদা ভেরিয়েবলে সংরক্ষণ করার উপায়ই হলো ডিসট্রাকচারিং।

### অবজেক্ট ডিসট্রাকচারিং

```js
const user = { name: 'Mehedi', age: 24, city: 'Dhaka' };

// নির্দিষ্ট প্রোপার্টি নেওয়া
const { name, city } = user;
console.log(name); // "Mehedi"
console.log(city); // "Dhaka"

// ভেরিয়েবলের নাম পরিবর্তন করা
const { name: userName } = user;

// ডিফল্ট ভ্যালু নির্ধারণ
const { country = 'BD' } = user;
```

### অ্যারে ডিসট্রাকচারিং

```js
const colors = ['red', 'green', 'blue'];

const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// উপাদান এড়িয়ে যাওয়া (Skip)
const [, , third] = colors; // "blue"

// ভ্যালু অদলবদল (Swap) করা
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

---

## ৭. অ্যারো ফাংশন বনাম সাধারণ ফাংশন (Arrow Functions vs Regular Functions)

অ্যারো ফাংশনের সিনট্যাক্স তুলনামূলক ছোট এবং এটি প্যারেন্ট স্কোপ থেকে `this` কনটেক্সট গ্রহণ করে।

| ফিচার | রেগুলার ফাংশন | অ্যারো ফাংশন |
|---------|-----------------|----------------|
| সিনট্যাক্স | `function() {}` | `() => {}` |
| `this` | নিজস্ব কনটেক্সট তৈরি করে | প্যারেন্ট স্কোপ থেকে পায় (Lexical) |
| `arguments` | অবজেক্ট হিসেবে পাওয়া যায় | পাওয়া যায় না |
| `new` কীওয়ার্ড | কনস্ট্রাক্টর হিসেবে ব্যবহারযোগ্য | কনস্ট্রাক্টর হিসেবে ব্যবহার করা যায় না |
| `prototype` | বিদ্যমান | থাকে না |

```js
// রেগুলার ফাংশন
function add(a, b) {
  return a + b;
}

// অ্যারো ফাংশন
const add = (a, b) => a + b;

// this কীওয়ার্ডের পার্থক্য
const obj = {
  name: 'Mehedi',
  regular: function() {
    console.log(this.name); // "Mehedi"
  },
  arrow: () => {
    console.log(this.name); // undefined (প্যারেন্ট স্কোপ থেকে পায়)
  }
};
```

> **টিপ:** কোনো অবজেক্টের মেথড বা ইভেন্ট হ্যান্ডলারে যেখানে নিজস্ব `this` প্রয়োজন, সেখানে অ্যারো ফাংশন ব্যবহার করবেন না।

---

## ৮. হায়ার-অর্ডার ফাংশন (Higher-Order Function) কী?

যে ফাংশন অন্য কোনো ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করে অথবা কোনো ফাংশনকে আউটপুট হিসেবে রিটার্ন করে, তাকে হায়ার-অর্ডার ফাংশন বলে।

```js
// ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ
function operate(a, b, fn) {
  return fn(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

operate(5, 3, add);      // 8
operate(5, 3, multiply); // 15

// জাভাস্ক্রিপ্টের বিল্ট-ইন হায়ার-অর্ডার ফাংশন
const numbers = [1, 2, 3, 4, 5];

numbers.filter(n => n > 3);    // [4, 5]
numbers.map(n => n * 2);       // [2, 4, 6, 8, 10]
numbers.reduce((sum, n) => sum + n, 0); // 15
```

---

## ৯. IIFE (Immediately Invoked Function Expression) কী?

যে ফাংশন তৈরি করার সাথে সাথেই নিজে নিজে এক্সিকিউট বা রান হয়ে যায়, তাকে IIFE বলে।

```js
// সাধারণ IIFE
(function() {
  const secret = 'hidden';
  console.log('তাৎক্ষণিক রান হলো!');
})();

// অ্যারো ফাংশন IIFE
(() => {
  console.log('এটিও সাথে সাথে চলবে!');
})();

// প্যারামিটারসহ
((name) => {
  console.log(`Hello ${name}`);
})('Mehedi');

// কেন ব্যবহার করা হয়? — একটি আইসোলেটেড স্কোপ তৈরি করতে এবং গ্লোবাল স্কোপ দূষণমুক্ত রাখতে।
```

---

## ১০. প্রমিজ (Promise) এবং Async/Await

অ্যাসিনক্রোনাস কাজগুলোকে সুশৃঙ্খলভাবে নিয়ন্ত্রণ করতে Promise ব্যবহৃত হয়। আর `async/await` হলো Promise-এর ওপর তৈরি একটি আরও পরিচ্ছন্ন সিনট্যাক্স।

```js
// কলব্যাক হেল (Callback hell)
getData(function(a) {
  getMore(a, function(b) {
    getEvenMore(b, function(c) {
      console.log(c);
    });
  });
});

// Promise চেইন
getData()
  .then(a => getMore(a))
  .then(b => getEvenMore(b))
  .then(c => console.log(c))
  .catch(err => console.error(err));

// Async/Await (সবচেয়ে পরিচ্ছন্ন)
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

## ১১. ES6 ক্লাসেস (Classes)

ES6 Classes অবজেক্ট তৈরি এবং ইনহেরিট্যান্স ব্যবস্থাপনাকে সহজ ও আধুনিক রূপ দিয়েছে।

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} একটি শব্দ করে`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // প্যারেন্ট কনস্ট্রাক্টর কল করা
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} ঘেউ ঘেউ করে`);
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // "Rex ঘেউ ঘেউ করে"
```

---

## ১২. মডিউলস — Import ও Export

ES6 মডিউল সিস্টেম কোডকে আলাদা আলাদা ফাইলে ভাগ করতে এবং শুধুমাত্র প্রয়োজনীয় অংশ ইমপোর্ট করতে সাহায্য করে।

```js
// math.js — Named export
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

// app.js — Import করা
import User from './user.js';
import { PI, add } from './math.js';

// নাম পরিবর্তন করে ইমপোর্ট (Rename)
import { add as sum } from './math.js';

// সম্পূর্ণ মডিউল একসাথে আনা
import * as MathUtils from './math.js';
```

---

## ১৩. Map vs Filter vs Reduce

| মেথড | উদ্দেশ্য | আউটপুট |
|--------|---------|---------|
| `map()` | প্রতিটি উপাদানকে রূপান্তর করে | নতুন সমদৈর্ঘ্যের অ্যারে |
| `filter()` | নির্দিষ্ট শর্ত পূরণ করা উপাদানগুলো ছাঁকন করে | নতুন সংক্ষিপ্ত অ্যারে |
| `reduce()` | সমস্ত উপাদানকে একটি চূড়ান্ত মানে পরিণত করে | একক মান (Single value) |

```js
const products = [
  { name: 'Laptop', price: 50000 },
  { name: 'Phone', price: 20000 },
  { name: 'Tablet', price: 15000 },
];

// map — শুধুমাত্র পণ্যের নাম নেওয়া
const names = products.map(p => p.name);
// ['Laptop', 'Phone', 'Tablet']

// filter — দামি পণ্যগুলো খুঁজে নেওয়া
const expensive = products.filter(p => p.price > 20000);
// [{ name: 'Laptop', price: 50000 }]

// reduce — মোট দাম হিসাব করা
const total = products.reduce((sum, p) => sum + p.price, 0);
// 85000
```

---

## ১৪. Local Storage vs Session Storage vs Cookies

| ফিচার | Local Storage | Session Storage | Cookies |
|---------|--------------|-----------------|---------|
| মেয়াদ (Expires) | ম্যানুয়ালি না মুছলে থাকে | ব্রাউজার ট্যাব বন্ধ হলে মুছে যায় | নির্ধারিত তারিখ পর্যন্ত |
| সাইজ (Size) | ~৫MB | ~৫MB | ~৪KB |
| সার্ভারে পাঠানো | না | না | প্রতিটি রিকোয়েস্টে যায় |
| অ্যাক্সেস | কেবল ক্লায়েন্ট-সাইডে | কেবল ক্লায়েন্ট-সাইডে | ক্লায়েন্ট ও সার্ভার উভয়ই |

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

## ১৫. Call by Value বনাম Call by Reference

প্রিমিটিভ ডেটা টাইপ ভ্যালু আকারে (By Value) এবং অবজেক্ট/অ্যারে রেফারেন্স আকারে (By Reference) পাস হয়।

```js
// Call by Value (প্রিমিটিভ)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — মূল মান অপরিবর্তিত থাকে

// Call by Reference (অবজেক্ট)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 — মূল মানও পরিবর্তিত হয়ে গেছে!

// সমাধান: স্প্রেড অপারেটর দিয়ে কপি করা
let copy = { ...obj1 };
copy.value = 30;
console.log(obj1.value); // 20 — এবার নিরাপদ
```

---

## ১৬. টারনারি অপারেটর (Ternary Operator)

সহজ ভাষায় `if-else` কন্ডিশন লেখার সংক্ষিপ্ত রূপ।

```js
// সিনট্যাক্স: condition ? valueIfTrue : valueIfFalse

const age = 20;
const status = age >= 18 ? 'Adult' : 'Minor';

// একাধিক কন্ডিশন (প্রোডাকশনে বেশি নেস্টিং এড়িয়ে চলুন)
const grade = score >= 80 ? 'A'
            : score >= 60 ? 'B'
            : score >= 40 ? 'C'
            : 'F';

// ফাংশন কল করা
isLoggedIn ? showDashboard() : showLogin();
```

---

## ১৭. প্রোটোটাইপ চেইন (Prototype Chain)

জাভাস্ক্রিপ্টের অবজেক্ট ইনহেরিট্যান্স ব্যবস্থা—যেখানে একটি অবজেক্ট অন্য অবজেক্ট থেকে প্রোপার্টি ও মেথডগুলো প্রোটোটাইপ লিংকের মাধ্যমে উত্তরাধিকার সূত্রে পায়।

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const me = new Person('Mehedi');
me.greet(); // "Hi, I'm Mehedi"

// প্রোটোটাইপ চেইন:
// me → Person.prototype → Object.prototype → null

console.log(me.hasOwnProperty('name')); // true
console.log(me.hasOwnProperty('greet')); // false (উত্তরাধিকার সূত্রে পাওয়া)
```

---

## ১৮. জাভাস্ক্রিপ্ট কোড কীভাবে ডিবাগ করবেন?

ব্রাউজার ডেভটুলস (DevTools), কনসোল মেথডসমূহ, ব্রেকপয়েন্ট এবং নেটওয়ার্ক ট্যাব ব্যবহার করে কোড ডিবাগ করা যায়।

**প্রয়োজনীয় টুলস:**

- `console.log()` — সাধারণ লগিং
- `console.table()` — ডেটাকে টেবিল আকারে দেখানো
- `console.time()` / `console.timeEnd()` — পারফরম্যান্স ও সময় পরিমাপ
- `debugger` — কোডের এক্সিকিউশন পজ করা
- **Breakpoints** — ডেভটুলসে নির্দিষ্ট লাইনে ব্রেকপয়েন্ট দেওয়া
- **Network Tab** — API কল ও রেসপন্স যাচাই করা

```js
// কনসোলের কার্যকর কিছু মেথড
console.log('সাধারণ বার্তা');
console.warn('সতর্কতামূলক বার্তা');
console.error('ত্রুটির বার্তা');
console.table([{ name: 'Mehedi', age: 24 }]);
console.time('টাইমার');
// কিছু কাজ...
console.timeEnd('টাইমার'); // "টাইমার: 0.5ms"

// Debugger স্টেটমেন্ট
function calculate(x) {
  debugger; // ডেভটুলস ওপেন থাকলে এখানে এক্সিকিউশন থেমে যাবে
  return x * 2;
}
```

---

## ১৯. API কী? GET বনাম POST রিকোয়েস্ট

API (Application Programming Interface) দুটি ভিন্ন সফটওয়্যার বা সিস্টেমের মধ্যে তথ্য আদান-প্রদানের মাধ্যম হিসেবে কাজ করে।

| ফিচার | GET | POST |
|---------|-----|------|
| উদ্দেশ্য | ডেটা রিট্রিভ বা সংগ্রহ করা | নতুন ডেটা সার্ভারে তৈরি বা পাঠানো |
| ডেটার অবস্থান | URL প্যারামিটারে দৃশ্যমান | রিকোয়েস্ট বডিতে এনক্রিপ্ট/লুকায়িত |
| ক্যাশ (Cache) | ক্যাশে রাখা যায় | ক্যাশ হয় না |
| আইডেমপোটেন্ট (Idempotent) | হ্যাঁ | না |
| ডেটা সাইজ লিমিট | আছে (~২০৪৮ ক্যারেক্টার) | কোনো সীমাবদ্ধতা নেই |

```js
// GET — ডেটা আনা
const response = await fetch('https://api.example.com/users');
const users = await response.json();

// POST — ডেটা পাঠানো
const response = await fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Mehedi', email: 'hello@mehedi-hasan.me' }),
});
```

---

## ২০. Array বনাম LinkedList

| ফিচার | Array | LinkedList |
|---------|-------|------------|
| অ্যাক্সেস | ইনডেক্স অনুযায়ী দ্রুত O(1) | ক্রমান্বয়ে ট্রাভার্স করতে হয় O(n) |
| শুরুতে উপাদান যোগ | ধীরগতির O(n) | দ্রুত O(1) |
| শেষে উপাদান যোগ | O(1) Amortized | টেইল নোড ছাড়া O(n) |
| মেমরি কাঠামো | একটানা ব্লক (Contiguous) | বিচ্ছিন্ন নোডস (Scattered) |
| সাইজ | ফিক্সড অথবা ডাইনামিক | সবসময় ডাইনামিক |

> **কখন কোনটি ব্যবহার করবেন?**
> - **Array** — দ্রুত ইনডেক্স সার্চ, সহজ ইটারেশন এবং সাধারণ কাজের জন্য সেরা।
> - **LinkedList** — যখন ডেটা স্ট্রাকচারের শুরুতে বারবার নতুন উপাদান যুক্ত বা ডিলিট করার প্রয়োজন পড়ে।

---

## শেষ কথা

ES6-এর এই কনসেপ্টগুলো জাভাস্ক্রিপ্ট ইন্টারভিউতে ঘুরেফিরে বারবার আসে। শুধুমাত্র সংজ্ঞা মুখস্থ না করে **কোড লিখে অনুশীলন করুন**। ইন্টারভিউয়াররা সাধারণত প্রতিটি কনসেপ্টের গভীরে ঢুকে ফলো-আপ প্রশ্ন করে থাকেন।

**প্রস্তুতি চেকলিস্ট:**
- `let` / `const` / `var`-এর স্পষ্ট পার্থক্য
- অ্যারো ফাংশন ও `this`-এর আচরণ
- অবজেক্ট ও অ্যারে ডিসট্রাকচারিং
- স্প্রেড বনাম রেস্ট অপারেটর
- প্রমিজ ও async/await
- অ্যারের মেথডসমূহ (map, filter, reduce)
- ক্লাসেস ও ইনহেরিট্যান্স
- মডিউল সিস্টেম (import/export)
