---
templateKey: blog-post
title: 'var, let and const in JavaScript'
date: 2018-10-06T10:34:10.000Z
description: >-
  In JavaScript, you can define a variable in different ways. Let's see how to
  choose the best one for your coding projects!
featuredpost: false
featuredimage: /img/chemex.jpg
tags:
  - javaScript
  - language
  - variable
---
![chemex](/img/chemex.jpg)

Since the release of ES6, if you want to initialize a variable in JavaScript, you can do it in three different ways, that is using the keywords var, let or const.
Let's take a look of them in action:

```
var a = 2;
let b = 2;
const c = 2;
```

All these three keywords allow you to initialize a new variable, but according to the keyword that you choose, the variable will have particular characteristics.

## const cannot be reassigned

For example, what happen if we try to reassign the variables a, b and c of the previous example?

```
a = 5 //fine!
b = 5 //fine!
c = 5 //error!

console.log(a) //5
console.log(b) //5
console.log(c) //2
```

In this example we can see the main difference between const and var/let: a variable initialized with const can't be reassign to a new value; if you try, an error was throwed.
Actually this doesn't mean that you can't modify the value assigned to a const variable:

```
const person = {name: "John"};
person.name = "Robert";
console.log(person.name) //Robert
```

## Block Scope

Let and const are both block and function scope while var is only function scope.
Now, what is a block scope? A block scope is essentially some code included inside a pair or curly braces, and are particularly common in if/else statements or in loops statements.

```
for (let i=0; i<10; i++) {
  const a = 5;
  console.log(a + i);
}
console.log(i); // ReferenceError
console.log(a); // ReferenceError
```

As you can see in this example, const and let variables initialized inside a block are not accessible from the outside; that is, they are accessible only inside the block scope.
Probably this can seem a very subtle difference, but it gets two main advantages:
- it allows you to write more neat and ordered code, in compliance with the PRINCIPLE OF THE LEAST PRIVILEGE. This principle says that you should expose only what is minimally necessary, and in fact we basically hide variables i and a from the rest of the program.
- Avoid some strange behaviors that var allows; for instance, in this example of closure:

```
function multiplicationTable(n) {
  const cbs = [];
  for (var i=1; i <= n; i++ ) {
    cbs.push(function(a) {return i * a});
  }
  return function(a) {
    return cbs.map(cb => cb(a));
  }
}
  
console.log(multiplicationTable(10)(2)); //[22,22,22,22,22,22,22,22,22,22]
```

You could expect that the result will be [2,4,6,8,10,12,14,16,18,20]; instead, if you try to run this code, you will obtain the following result: [22,22,22,22,22,22,22,22,22,22].
This happens because, since the variable i is not block scoped, JavaScript hoists this variable at the top of the function block:

```
function multiplicationTable(n) {
  var i;
  const cbs = [];
  for (i=1; i <= n; i++ ) {
    cbs.push(function(a) {return i * a});
  }
  return function(a) {
    return cbs.map(cb => cb(a));
  }
}
```
so at the time we run the last line of the program in the example, the value of i is 11.
The easier way to fix this issue, is to use let to initialize and declare the variable i:

```
function multiplicationTable(n) {
  const cbs = [];
  for (var i=1; i <= n; i++ ) {
    cbs.push(function(a) {return i * a});
  }
  return function(a) {
    return cbs.map(cb => cb(a));
  }
}
  
console.log(multiplicationTable(10)(2)); //[2,4,6,8,10,12,14,16,18,20];
```

Basically, let rebinds the variable i to each iteration of the for loop, each time reassigning it with the updated value of i.

## Hoisting
JavaScript has the default behavior of moving all the variable and function declarations to the top of the current scope (this is also know as hoisting), but variables declared using var are automatically initialized as undefined, while variables declared using both let and const stay uninitialized until the let/const variables are declared in the code. This means that let and const variables must be declared before you try to reference them, otherwise you get a ReferenceError.

```
console.log(a); // undefined
var a = 5;

console.log(a); // ReferenceError
const a = 5;

console.log(a); // ReferenceError
let a = 5;
``` 

## Conclusion
Personally, I prefer to use const whenever I can, while I use let only when I know that a specific variable will be reassigned in a later time. A typical example can be an index variable in a for loop (see Example 4). 

Instead, I usually avoid to use var.
