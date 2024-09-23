---
layout: post
title: Javascript Cell
description: Let's run some javascript commands and functions!
permalink: /posts/javascript_cell
comments: True
---

```javascript
%%javascript
// Data Types Hack

const myselfObject = {
    name: "Aaditya Taleppady",
    age: 15,
    currentClasses: ["3D Animation 2", "AP Calculus", "AP Chemistry", "AP English Seminar", "AP Computer Science Principles"],
    interests: ["Coding", "Football", "Basketball"],
    extracurricularActivities: ["CyberAegis", "Basketball"],
    favoriteFood: ["Pasta"]
};

console.log(myselfObject);

myselfObject.interests[0] = "Watching youtube";

console.log("This is my object after manipulating my interests array:", myselfObject);
console.log(myselfObject.age - 7, "is my age subtracted by 7")
console.log("The type of data of my age in my object is",typeof myselfObject.age);
console.log("The type of data of my name in my object is",typeof myselfObject.name);
console.log("The type of data of my interests in my object is",typeof myselfObject.interests);

// JavaScript Hacks

let a = 15;
let b = 20;

if (a > b) {
    console.log("a is greater");
} else if (b > a) {
    console.log("b is greater");
} else {
    console.log("both are equal");
}



let x = 10;
let y = 5;

// Perform operations
let addition = x + y;
let subtraction = x - y;
let multiplication = x * y;
let division = x / y;

// Print results to the console
console.log("Addition: " + addition);         // Output: Addition: 15
console.log("Subtraction: " + subtraction);   // Output: Subtraction: 5
console.log("Multiplication: " + multiplication); // Output: Multiplication: 50
console.log("Division: " + division);         // Output: Division: 2



```


    <IPython.core.display.Javascript object>


```
{name: 'Aaditya Taleppady', age: 15, currentClasses: Array(5), interests: Array(3), extracurricularActivities: Array(2), …}
8 'is my age subtracted by 7'
The type of data of my age in my object is number
The type of data of my name in my object is string
The type of data of my interests in my object is object
b is greater
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2

```
