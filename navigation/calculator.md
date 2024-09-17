---
layout: page
title: Number Systems Calculator
permalink: /calculator/
---

<h1>Welcome to my number systems calculator</h1>

<p>Binary Calculator:</p>

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

<p>Hexadecimal Calculator:</p>

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


<p>Octal Calculator:</p>

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




<style>

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

