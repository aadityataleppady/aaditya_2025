---
layout: page
title: About
permalink: /about/
comments: True
---

Hello, my name is Aaditya Taleppady.

<img src="../images/full_picture.png">

I was born in San Diego, California. I am 15 years old, and am a 10th grader at Del Norte High School. My favorite subject in school is AP Calculus and AP Computer Science Principles. Some of my hobbies include coding, cooking, reading, and playing sports such as basketball and football.

Basketball:

- I love playing basketball in my free time. I also love watching basketball. My favorite basketball team is the Golden State Warriors.

<img src="../images/gsw_logo.png">


Football:

- I also love playing football, but only for fun. I also love watching football. My favorite football team is the San Francisco 49ers.

<img src="../images/49ers_logo.png">


These pictures represent the places I've visited:

<p>India:</p>
<img src="../images/indiaflag.png">

<p>Hawaii:</p>
<img src="../images/hawaii_image.jpg">

<p>Aruba:</p>
<img src="../images/aruba.jpg">



These pictures represent my hobbies and interests:


 <style>
        /* Slideshow container */
        .slideshow-container {
            max-width: 1000px;
            position: relative;
            margin: auto;
        }

        /* Hide the images by default */
        .mySlides {
            display: none;
        }

        /* Image style */
        .mySlides img {
            width: 100%;
            border-radius: 5px;
        }

        /* Next & previous buttons */
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }

        /* Position the "next button" to the right */
        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }

        /* Caption text */
        .text {
            color: #f2f2f2;
            font-size: 15px;
            padding: 8px 12px;
            position: absolute;
            bottom: 8px;
            width: 100%;
            text-align: center;
        }

        /* Number text (1/3 etc) */
        .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
        }

        /* Dots/bullets/indicators */
        .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
            background-color: #717171;
        }

        /* Fading animation */
        .fade {
            animation-name: fade;
            animation-duration: 1.5s;
        }

        @keyframes fade {
            from {opacity: .4}
            to {opacity: 1}
        }
    </style>


<div class="slideshow-container">

<div class="mySlides fade">
    <div class="numbertext">1 / 4</div>
    <img src="../images/basketball.jpg" alt="Image 1">
    <div class="text">Basketball</div>
</div>

<div class="mySlides fade">
    <div class="numbertext">2 / 4</div>
    <img src="../images/coding.jpg" alt="Image 2">
    <div class="text">Coding</div>
</div>

<div class="mySlides fade">
    <div class="numbertext">3 / 4</div>
    <img src="../images/cooking.jpg" alt="Image 3">
    <div class="text">Cooking</div>
</div>

<div class="mySlides fade">
    <div class="numbertext">4 / 4</div>
    <img src="../images/football.jpg" alt="Image 4">
    <div class="text">Football</div>
</div>

<!-- Next and previous buttons -->
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>

<br>

<!-- The dots/circles -->
<div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span> 
    <span class="dot" onclick="currentSlide(2)"></span> 
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span> 
</div>

<script>
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }
</script>

<script src="https://utteranc.es/client.js"
        repo="aadityataleppady/aaditya_2025"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>