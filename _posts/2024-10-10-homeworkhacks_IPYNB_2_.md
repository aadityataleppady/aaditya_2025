---
layout: post
title: Homework Hacks for 3.6-7
description: These are the homework hacks. They might be in a different order.
permalink: /posts/homeworkhacks
comments: True
---

These are the homework hacks for 3.6 and 3.7

Hack 1:

Instructions: Your hack is to create a piece of code that compares two statements and checks if they are equal to each other

My code:


```python
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
```

    The statements are not equal to each other :(


Hack 2:

Instructions: 

Create a hack that compares two variables to one another, if they are true return “We are the same” if they are not check if they are the same length, if they are return “We are the same length!” If none of these are true return “We are not that similar :(”

Hint: Use the len() function. len() function accepts a string as an input and outputs the string’s length

My code:


```python
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


```

    We are the same length!


Hack 3:

Instructions: Create a simple conditional statement like the ones above (do it in a different situation, so not baking)

My code:


```python
# variable in fahrenheit

water_temp = 150

# function

def start_boiling():
    print("The water is boiling!")
    
if water_temp >= 100:
    start_boiling() # calls the start_boiling function to start the boiling process
```

    The water is boiling!


Hack 4:

Instructions: Create a basic hack that determines whether you are a child, teenager or adult when you input your age.

My code:


```python
# age
age = 15

# if statement to see if the person is a child, teenager, or adult

if age >= 3 and age <=12:
    print("The user is a child")
elif age >=13 and age <=17:
    print("The user is a teenager")
else:
    print("The user is an adult")
```

    The user is a teenager


Hack 5:

Instructions:

Now it’s time to practice Nested Conditionals!

- test out the examples above and change up the the starting values to play with how the conditions within eachother work
- demonstrate knowledge of nested conditionals by creating your own nested conditional statements.

My code:


```python
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
```

    You have the basic ingredients!
    Your cookie will have a taste!
    Your cookie doesn't have vanilla extract, it won't taste amazing but it works
    You have salt, this will balance the sweetness
    Your cookie doesn't have chocolate chips, it works but it doesn't look like a cookie.


Hack 6:

Instructions: Create a hack that asks the user to type the numbers up to 10. Not all at once.

My code:



```python
# input from the user (a number)

number = 5

# conditional to check if the number is before 10.
if number >=1 and number <=10:
    print("That number is before 10! Type another number!")
else:
    print("That number is not before 10! Type another number!")
```
