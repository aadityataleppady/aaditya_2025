---
layout: page
title: Cookie Clicker
permalink: /cookie-clicker/
---
<br>
<p>Please do not <span class="bake" onclick="bake()">bake</span> any more than 50 cookies. A cookie virus will be installed if you do. 🍪</p>

<img id="cookie" class="cookie" src="../images/cookie.png" onclick="increaseCount()">

<p>Cookies: <span id="cookieCount">0</span></p>

<button id="reset" onclick="reset()">Reset cookie count</button>

<script src="../assets/js/cookie.js"></script>

<style>
.cookie:hover {
    cursor: grabbing;
}
.bake:hover {
    cursor: pointer;
}

</style>