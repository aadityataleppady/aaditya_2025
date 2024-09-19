---
layout: page
title: Cookie Clicker 🍪
permalink: /cookie-clicker/
---
<br>

<div id="cookieClicker">

<p>Please do not <span class="bake" onclick="bake()">bake</span> any more than 50 cookies. A cookie virus will be installed if you do. 🍪</p>

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