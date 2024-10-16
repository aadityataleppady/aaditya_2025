---
layout: post
title: Sprint 2 Notes
description: Notes for Sprint 2
permalink: /posts/Sprint2Notes
comments: True
---

These are notes for each lesson:

3.2:

```
# Python

import json

x =  '{ "name":"John", "age":30, "city":"New York"}' # mr morts example json (im too lazy to come up with something original the mercedes clr gtr took waay to much time)

y = json.loads(x) # js equivalent is JSON.parse()

print(y) # returns a dict
print(y["age"])
```
```
// Javascript

%%javascript
var possesions = {
  owner: "Lil Bro",
  dollars: 50,
  food: ["apps", "pizza", "banana"],
};

console.log(possesions);
// -> { owner: "Lil Bro", dollars: 50, food: ["apps","pizza","banana"] }
possesions.food[2] = "half-eaten banana";
console.log(possesions.food);
// -> [ "apps", "pizza", "half-eaten banana" ]
possesions.dollars = possesions.dollars / 2;
console.log(possesions.dollars);
// -> 25

console.log(JSON.stringify(possesions));
// -> {"owner":"Lil Bro","dollars":25,"food":["apps","pizza","half-eaten banana"]}

```

3.3:

Modulus(remainder of a / b): a MOD b
    - MOD is %
Floor division(rounds to the nearest whole number):
    - In python a // b
    - Javascript doesn’t have an operator so use Math.floor(a / b)

```
# Python

numb1 = 12
numb2 = 8
product = numb1 * numb2  
print("Product:", product)  # Output should be Product: 96
modulus = product % numb2 
print("Modulus:", modulus) # Output should be Modulus: 0

// Javascript

let numb1 = 12
let numb2 = 8
let product = numb1 * numb2
console.log("Product:", product)
let modulus = product % numb2
console.log("Modulus:", modulus)
```

3.5:

x == y (equals)
x != y (not equal to)
x > y (greater than)
x < y (less than)
x >= y (greater than or equal to)
x <= y (less than or equal to)

```
// Javascript:

let age1 = 16;
let age2 = 14;

// Boolean expression:
let isOlder = age1 > age2;

// Output:
if (isOlder) {
    console.log("Person 1 is older.");
} else if (age1 < age2) {
    console.log("Person 2 is older.");
} else {
    console.log("Both people are the same age.");
}
```

3.6:

```
// pseudocode 

boolean = false;
int = 17;

if boolean == true
    if int >= 10
        display 'This is both true and greater than or equal to 10'
    else
        display 'This is both true and less than 10'
else
    if int >- 10
        display 'This is both false and greater than or equal to 10'
    else
        display 'This is both false and less than 10'
// The display will read 'This is both false and greater than or equal to 10.' This is due to the fact that we have an if statement in another if statement. In this code it runs through the first if statement, and then runs the second if statement. This second if statement runs display 'This is both true and greater than or equal to 10'. The first if statement checks false and moves to the else statement. Then the if statement is checked, and since it is true displays 'This is both false and greater than or equal to 10'.
```

3.7:

```
# Python

%%python
# Budget
budget = 900  

# Phone prices
iphone_16_price = 1200
iphone_14_price = 1000
iphone_12_price = 800

# Determine which iPhone you can buy
if budget >= iphone_16_price:
    print("You can buy an iPhone 16!")
elif budget >= iphone_14_price:
    print("You can buy an iPhone 14!")
elif budget >= iphone_12_price:
    print("You can buy an iPhone 12!")
else:
    print("You don't have enough money to buy an iPhone.")
```

3.10:

```
# Python

// Initialize an empty array
var aList = [];

// Assuming 'i' is defined, e.g., var i = 0; before accessing
var i = 0; // Example definition

// Accessing array values
var x = aList[i]; // Assigns value of aList[i] to variable x
aList[i] = x; // This does nothing meaningful as x is being assigned back to the same index

// Function to insert a value at a specific index
var value = 10; // Example value
aList.splice(i, 0, value); // Inserts value at index i

// Function to remove a value at a specific index
aList.splice(i, 1); // Removes the element at index i

// Function to get the length of the array
console.log(aList.length); // Returns the number of elements in aList

// Function to append a value to the end of the array
aList.push(value); // Adds value to the end of aList

// Using unshift() to add an item at the beginning
aList.unshift(value); // Adds value to the beginning of the list

// Using pop() to remove the last item
aList.pop(); // Removes the last item

// Using shift() to remove the first item
aList.shift(); // Removes the first item

// Function that logs various types of data
console.log(aList); // This would output the values of aList
```
