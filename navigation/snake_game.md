---
layout: page
title: Snake Game
permalink: /snake_game/
---

    
<h1>Welcome to my Snake Game</h1>

<!-- Selecting color of the snake:-->

<div class="color-picker-container">
        <label for="colorPicker" class="color-picker-label">Choose Snake Color:</label>
        <select id="colorPicker" class="color-picker">
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="white">White</option>
        </select>
    </div>

<!-- Selecting number of apples -->

<div class="apple-picker-container">
    <label for="appleCount" class="apple-picker-label">Choose Number of Apples:</label>
    <select id="appleCount" class="apple-picker">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>


<canvas id="game_canvas" width="400" height="400"></canvas>

<!-- Javascript code for the snake game -->

<script>

const canvas = document.getElementById("game_canvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
let snake = [{ x: gridSize * 2, y: gridSize * 2 }];
let direction = { x: 0, y: 0 }; // Initially, no movement
let score = 0;
let snakeColor = "green"; // Default color
let appleCount = 1; // Default to 1 apple
let apples = []; // Array to store multiple apples
let gameInterval;
let gameStarted = false; // Track if the game has started

// Get the color from the dropdown
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", (event) => {
    snakeColor = event.target.value;
    drawGame(); // Redraw the game to immediately reflect the new snake color
});

// Get the apple count from the dropdown
const applePicker = document.getElementById("appleCount");
applePicker.addEventListener("change", (event) => {
    appleCount = parseInt(event.target.value);
    placeMultipleApples(); // Immediately place apples
    drawGame(); // Redraw the game to reflect the new number of apples immediately
});

// Add event listener for key presses
document.addEventListener("keydown", (event) => {
    if (!gameStarted && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        startGame();
        gameStarted = true;
    }
    changeDirection(event);
});

function startGame() {
    gameInterval = setInterval(updateGame, 100);
}

function resetGame() {
    snake = [{ x: gridSize * 2, y: gridSize * 2 }];
    direction = { x: 0, y: 0 }; // Reset movement to stationary
    score = 0;
    gameStarted = false; // Reset gameStarted flag
    clearInterval(gameInterval); // Stop any previous game loop
    placeMultipleApples(); // Place apples based on current apple count
    drawGame(); // Draw the snake and apples on the canvas
}

function updateGame() {
    moveSnake();
    if (checkCollision()) {
        clearInterval(gameInterval);
        alert("Game Over! Your Score: " + score);
        resetGame(); // Reset the game instead of reloading the page
    }
    if (snakeEatsFood()) {
        score++;
        growSnake();

        // Only place new apples if all the current ones have been eaten
        if (apples.length === 0) {
            placeMultipleApples();
        }
    }
    drawGame();
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);
    snake.pop();
}

function changeDirection(event) {
    if (event.key === "ArrowUp" && direction.y === 0) {
        direction = { x: 0, y: -gridSize };
    } else if (event.key === "ArrowDown" && direction.y === 0) {
        direction = { x: 0, y: gridSize };
    } else if (event.key === "ArrowLeft" && direction.x === 0) {
        direction = { x: -gridSize, y: 0 };
    } else if (event.key === "ArrowRight" && direction.x === 0) {
        direction = { x: gridSize, y: 0 };
    }
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function snakeEatsFood() {
    // Check if the snake eats any apple
    return apples.some((apple, index) => {
        if (snake[0].x === apple.x && snake[0].y === apple.y) {
            apples.splice(index, 1); // Remove the eaten apple
            return true;
        }
        return false;
    });
}

function growSnake() {
    snake.push({ ...snake[snake.length - 1] });
}

function placeMultipleApples() {
    apples = [];
    for (let i = 0; i < appleCount; i++) {
        apples.push({
            x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        });
    }
}

function drawGame() {
    // Clear the canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
}

function drawSnake() {
    ctx.fillStyle = snakeColor; // Use the selected color for the snake
    for (let part of snake) {
        ctx.fillRect(part.x, part.y, gridSize, gridSize);
    }
}

function drawFood() {
    ctx.fillStyle = "red";
    apples.forEach(apple => {
        ctx.fillRect(apple.x, apple.y, gridSize, gridSize);
    });
}

// Initialize the game without starting movement
resetGame(); // This draws the snake and apples on the canvas without starting the game

</script>


<style>

.apple-picker-container {
    margin: 20px;
}

.apple-picker-label {
    font-size: 18px;
    color: #1DB954; 
    margin-right: 10px;
}

.apple-picker {
    padding: 10px;
    border: 2px solid #1a9a46; 
    background-color: #e6f7ff; 
    color: #1DB954; 
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

.apple-picker:hover {
    background-color: #cceeff;
}



.color-picker-container {
    margin: 20px;
}

.color-picker-label {
    font-size: 18px;
    color: #1DB954;
    margin-right: 10px;
}

.color-picker {
    padding: 10px;
    border: 2px solid #1a9a46;
    background-color: #e6f7ff;
    color: #1DB954;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

.color-picker:hover {
    background-color: #cceeff; 
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
}

canvas {
    background-color: #000;
    border: 5px solid #333;
    border-color: blue;
}

</style>