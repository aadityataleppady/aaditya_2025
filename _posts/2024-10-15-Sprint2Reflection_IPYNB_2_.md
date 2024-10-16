---
layout: post
title: Sprint 2 Reflection
description: This is the blog for Sprint 2
permalink: /posts/Sprint2Reflection
comments: True
---

In the beginning of Sprint 2, after the formation of our teams, we made our lessons for Python and JavaScript. My group did the 3.1 and 3.4 lessons. I did the popcorn hacks, and my group did the rest. In  3.1, we went over variables, such as the naming conventions and different types of variables in Python and Javascript. In 3.4, we went over strings in Python and Javascript. In addition, the highlight of our lesson was the quiz embedded into our lesson page, making the lesson interactive. For the other groups' lessons, we did the popcorn hacks in class, and did the homework after. After the lessons, I learnt a lot about arrays, if statements, mathematical operations, and logical operators in both Python and Javascript. Now, in my code, I use if statements, arrays, and booleans, making my code better. Also, I created a blog with notes from each lesson, which will help me remember different topics and help me on the AP test. These concepts would help me in the college board AP tests and project-based learning. This would help me in the college board AP test because, after the lessons, I now know a lot about Python and Javascript. Specifically, I learnt how to manipulate the data inside arrays in both Python and Javascript. Also, I learnt how to use JSON in both Python and Javascript. In addition, I did not have problems with the homework and my code was good, showing that I learnt a lot from the lessons. I spent a lot of time and effort on the homework and popcorn hacks, which would eventually benefit me in the college board AP test.

This is the link to my issue: [link](https://github.com/aadityataleppady/aaditya_2025/issues/4)

These are my homework and popcorn hacks for 3.2:
```
import json

# JSON data

json_data = '''
{
    "product": "Laptop",
    "price": 999.99,
    "stock": true,
    "features": ["Touchscreen", "SSD", "Backlit Keyboard"],
    "specifications": {
        "processor": "Intel i7",
        "ram": 16,
        "storage": "512GB SSD"
    },
    "related_products": [1234, 5678, 9012]
}
'''

# Reading JSON data

data = json.loads(json_data)

# printing 5 different types of variables

print(data["product"]) #string
print(data["price"]) #float
print(data["stock"]) #boolean
print(data["features"]) #array or list
print(data["specifications"]) #dictionary

# editing 5 different types of variables

data["product"] = "Gaming Laptop"
data["price"] = 1299.99
data["stock"] = False
data["features"].append("RGB Lighting")
data["specifications"]["ram"] = 32

# changing JSON back to string

modified_json_data = json.dumps(data)

print(modified_json_data)
```
```
// JSON Data form online

let jsonData = `
{
    "product": "Laptop",
    "price": 999.99,
    "stock": true,
    "features": ["Touchscreen", "SSD", "Backlit Keyboard"],
    "specifications": {
        "processor": "Intel i7",
        "ram": 16,
        "storage": "512GB SSD"
    },
    "related_products": [1234, 5678, 9012]
}
`;

// getting JSON data

let data = JSON.parse(jsonData)

// reading 5 different types of variables

console.log(data.product); //string
console.log(data.price); //float
console.log(data.stock); //boolean
console.log(data.features); //array or list
console.log(data.specifications); //object

// editing 5 different types of variables

data.product = "Gaming Laptop"; //string
data.price = 1399.99; //float
data.stock = false; //boolean
data.features.push("RGB Lighting"); //array or list
data.specifications.ram = 32; //object

//converting back to JSON
let editedJsonData = JSON.stringify(data);
console.log(editedJsonData);
```
```
# Car popcorn hack
import json

# dictionary for audi r8

audi_r8 = {
    "name": "Audi R8",
    "performance": {
        "engine": "5.2-liter V10",
        "horsepower": 602,
        "acceleration": "0 to 100 km/h in 3.4 seconds",
        "top_speed": "over 330 km/h"
    },
    "features": {
        "aerodynamics": "optimized for performance",
        "stability_technologies": "quattro all-wheel drive",
        "stability_control": "enhanced for agility and cornering"
    },
    "pricing": {
        "original_price": "$142,700",
        "production_run": "not limited",
        "rarity": "popular among sports car enthusiasts"
    },
    "car_type": "Sports Car",
    "Looks": "Great"
}

# Convert to JSON string
json_car_string = json.dumps(audi_r8)

print(json_car_string)
```
```
// 8-ball Popcorn Hack
let answer = true;
console.log("Magic 8 ball, is Kanhay good at coding?");
console.log("The ball had decided that it's " + answer);
// Changing answer to false
answer = false;
console.log("Magic 8 ball, is Kanhay good at coding?")
console.log("The ball has changed its answer! The ball has decided that it's " + answer);
```


These are my homework and popcorn hacks for 3.3:

```
# Popcorn Hack #1
a = 15
b = 21
print((a + b) / 4)
```
```
a = 15
b = 40

product = a * b
print(product)
mod = b % a
print(mod)
```
```
e = 10
f = 5

print(e - f)
```
```
num1 = 10
num2 = 5

addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
exponent = num1 ** num2

print(addition)
print(subtraction)
print(multiplication)
print(division)
print(exponent)
```
```
let a = 15;
let b = 21;

console.log((a + b) / 4);
```
```
let c = 15;
let d = 40;

let product = c * d
console.log(product);

let mod = c % d;
console.log(mod);
```
```
let e = 10;
let f = 5;

console.log(e - f);
```
```
let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let exponent = num1 ** num2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(exponent);
```


These are my homework and popcorn hacks for 3.5:

```
# height in inches
height = 58

# boolean expression
short = height < 60

# using if statement to see if person is short or tall

if short:
    print("This person is short HAHA")
else:
    print("This person is tall!")
```
```
battery_life = 70

# boolean expressions

comfortable = battery_life <= 100 and battery_life > 40
notComfortable = battery_life <= 39


# if statement to see if battery life is comfortable or not
if comfortable:
    print("This is a comfortable battery life yay!")
elif notComfortable:
    print("THIS IS NOT A COMFORTABLE BATTERY LIFE HELP")
```
```
# person is authorized
is_authorized = False

# used to determine access
can_enter = not is_authorized

# if statement to check if person is authorized
if can_enter:
    print("This person is authorized!")
else:
    print("This person is not authorized!")
```
```
let height = 65; // in inches

// boolean expression

let short = height < 60;

// using if statement to  check if person is short or tall

if (short) {
    console.log("This person is short HAHA");
} else {
    console.log("This person is tall!");
}
```
```
let battery_life = 15;

// boolean expressions

let comfortable = battery_life <= 100 && battery_life > 40;
let notComfortable = battery_life <= 39;

// if statament to check if battery life is comfortable or not

if (comfortable) {
    console.log("Battery life is comfortable, yay!");
} else if (notComfortable) {
    console.log("THIS IS NOT A COMFOTABLE BATTERY LIFE HELP!");
}
```
```
// person is authorized
let isAuthorized = true;

// used to determine access
let canEnter = !isAuthorized;

// if statement to see if person is authorized

if (canEnter) {
    console.log("This person is not authorized!");
} else {
    console.log("This person is authorized!");
}
```
```
| A   | B   | A AND B | A OR B | A XOR B |
| --- | --- | ----- | ----- | ----- |
| T   | T   |   T   |   T   |   F   |
| T   | F   |   F   |   T   |   T   |
| F   | T   |   F   |   T   |   T   |
| F   | F   |   F   |   F   |   F   |

```

These are the homework and popcorn hacks for 3.6-7:

```
# statement:
statement1 = "This is a pretty cool statement"
statement2 = "This is also a pretty cool statement"

# boolean
check = statement1 == statement2

# if statement to check if the statements are equal to each other
if check:
    print("The statements are equal to each other!")
else:
    print("The statements are not equal to each other :(")

# two variables

var1 = "A cool string"
var2 = "Cool variable"

# conditionals

if var1 == var2:
    print("We are the same")
elif len(var1) == len(var2):
    print("We are the same length!")
else:
    print("We are not that similar :(")

# variable in fahrenheit

water_temp = 150

# function

def start_boiling():
    print("The water is boiling!")
    
if water_temp >= 100:
    start_boiling() # calls the start_boiling function to start the boiling process

# age
age = 15

# if statement to see if the person is a child, teenager, or adult

if age >= 3 and age <=12:
    print("The user is a child")
elif age >=13 and age <=17:
    print("The user is a teenager")
else:
    print("The user is an adult")

# ingredients for cookie baking

flour = True
sugar = True
butter = True
eggs = True
vanilla_extract = False
salt = True
chocolate_chips = False

# logic when baking cookies

if flour and butter and eggs:
    print("You have the basic ingredients!")
    
    if sugar:
        print("Your cookie will have a taste!")
        
        if vanilla_extract:
            print("Your cookie has vanilla extract, your cookie will taste even better!")
        else:
            print("Your cookie doesn't have vanilla extract, it won't taste amazing but it works")
            
        if salt:
            print("You have salt, this will balance the sweetness")
        else:
            print("You don't have salt, the sweetness in your cookie might not be fully balanced")
        
        if chocolate_chips:
            print("Your cookie has chocolate chips, it looks like a cookie now!")
        else:
            print("Your cookie doesn't have chocolate chips, it works but it doesn't look like a cookie.")
        
    else:
        print("Please add sugar, your cookie will taste very bad otherwise")
else:
    print("You need flour, butter, and eggs to make a cake")

# input from the user (a number)

number = 5

# conditional to check if the number is before 10.
if number >=1 and number <=10:
    print("That number is before 10! Type another number!")
else:
    print("That number is not before 10! Type another number!")
```

