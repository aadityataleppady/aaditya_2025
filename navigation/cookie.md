---
layout: page
title: Cookie Clicker 🍪
permalink: /cookie-clicker/
---
<br>

<div id="cookieClicker">

<p>Welcome to my Cookie Clicker! Click the cookie to <span class="bake" onclick="bake()">bake</span> some cookies! 🍪</p>

<img id="cookie" class="cookie" src="../images/funnycookie.jpg" onclick="increaseCount()">

<p id="cookieText">Cookies: <span id="cookieCount">0</span></p>

<button id="reset" onclick="reset()">Reset cookie count</button>

<script src="../assets/js/cookie.js"></script>

</div>

<style>

.cookieClicker {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cookie:hover {
    cursor: grabbing;
}
.bake:hover {
    cursor: pointer;
}

</style>