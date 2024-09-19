---
layout: page
title: Number Systems Calculator
permalink: /calculator/
---

<head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</head>


<h1>Welcome to my number systems calculator</h1>

<p id="calc_text">Binary Calculator:</p>

<div class="binary_calculator">
        <input type="number" id="decimal-input" placeholder="Enter decimal number" />
        <button onclick="convertToBinary()">Convert to Binary</button>
        <p id="binary-output"></p>
</div>

<!-- javascript function to convert decimal to binary-->

<script>

function convertToBinary() {
    // Get the input value
    let decimalNumber = document.getElementById('decimal-input').value;

    // Convert decimal number to binary
    let binaryNumber = parseInt(decimalNumber).toString(2);

    // Display the result
    document.getElementById('binary-output').innerText = `Binary: ${binaryNumber}`;
}

</script>

<p id="calc_text">Hexadecimal Calculator:</p>

<div class="hexadecimal_calculator">
        <input type="number" id="decimal-input" placeholder="Enter decimal number" />
        <button onclick="convertToHexadecimal()">Convert to Hexadecimal</button>
        <p id="hexadecimal-output"></p>
</div>

<script>

function convertToHexadecimal() {
    // Get the input value
    let decimalNumber = document.getElementById('decimal-input').value;

    // Convert decimal number to hexadecimal
    let hexNumber = parseInt(decimalNumber).toString(16).toUpperCase();

    // Display the result
    document.getElementById('hexadecimal-output').innerText = `Hexadecimal: ${hexNumber}`;
}

</script>


<p id="calc_text">Octal Calculator:</p>

<div class="octal_calculator">
        <input type="number" id="decimal-input" placeholder="Enter decimal number" />
        <button onclick="convertToOctal()">Convert to Octal</button>
        <p id="octal-output"></p>
</div>

<script>

function convertToOctal() {
    // Get the input value
    let decimalNumber = document.getElementById('decimal-input').value;

    // Convert decimal number to octal
    let octalNumber = parseInt(decimalNumber).toString(8);

    // Display the result
    document.getElementById('octal-output').innerText = `Octal: ${octalNumber}`;
}

</script>

<p id="calc_text">Binary to Decimal Calculator:</p>

<div class="binary_to_decimal_calculator">

<input type="text" id="binary-input" placeholder="Enter binary number" />
<button onclick="convertBinaryToDecimal()">Convert to Decimal</button>
<p id="decimal-output"></p>

</div>

<script>

function convertBinaryToDecimal(binary) {
    // Convert the binary string to a decimal number
    let decimal = parseInt(binary, 2);

    // Return the decimal number
    return decimal;
}

</script>

<p id="calc_text">Hexadecimal to Decimal Calculator</p>

<div class="hex_to_decimal_calculator">

<input type="text" id="hex-input" placeholder="Enter hexadecimal number" />
<button onclick="convertHexToDecimal()">Convert to Decimal</button>
<p id="decimal-output"></p>

</div>

<script>

function convertHexToDecimal() {
    // Get the input value (hexadecimal string)
    let hexNumber = document.getElementById('hex-input').value;

    // Convert hexadecimal string to decimal number
    let decimalNumber = parseInt(hexNumber, 16);

    // Display the result
    if (isNaN(decimalNumber)) {
        document.getElementById('decimal-output').innerText = "Invalid hexadecimal number!";
    } else {
        document.getElementById('decimal-output').innerText = `Decimal: ${decimalNumber}`;
    }
}

</script>

<p id="calc_text">Octal to Decimal Calculator:</p>

<div class="octal_to_decimal_calculator">

<input type="text" id="octal-input" placeholder="Enter octal number" />
<button onclick="convertOctalToDecimal()">Convert to Decimal</button>
<p id="decimal-output"></p>

</div>

<script>

function convertOctalToDecimal() {
    // Get the input value (octal string)
    let octalNumber = document.getElementById('octal-input').value;

    // Convert octal string to decimal number
    let decimalNumber = parseInt(octalNumber, 8);

    // Display the result
    if (isNaN(decimalNumber)) {
        document.getElementById('decimal-output').innerText = "Invalid octal number!";
    } else {
        document.getElementById('decimal-output').innerText = `Decimal: ${decimalNumber}`;
    }
}

</script>



<style>

#calc_text {
    text-align: center;
    font-weight: bold;
    color: blue;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
}

.binary_to_decimal_calculator {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.hex_to_decimal_calculator {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.octal_to_decimal_calculator {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.hexadecimal_calculator {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.binary_calculator {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.octal_calculator {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

input {
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

</style>

