---
layout: base
title: Aaditya's Website 
description: Aaditya's Website
image: /images/mario_animation.png
hide: true
---

<style>
  #heading {
    text-align: center;
    font-weight: 500;
  }
</style>


<h1 id="heading">Welcome To My Page!</h1>

<br>



<!-- Mario Code under here -->



<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>


<style>
  #myJourneyButton {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
  }
</style>

<style>
  #myJourneyButtonCase {
    text-align: center;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>


<div id="myJourneyButtonDiv">
<a id="myJourneyButtonCase" target="_blank" href="my_journey">
    Click here to go to My Journey!
</a>
</div>

<style>

#myJourneyButtonDiv {
    text-align: center;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;

}

#myJourneyButtonCase {
    background-color: #89CFF0;  /* Blue */
    border: 2px solid #5F9EA0;  /* Darker Blue */
    color: white;  /* White text */
    padding: 12px 24px;  /* Padding for the button */
    text-decoration: none;  /* Remove underline from link */
    font-family: 'Verdana', sans-serif;  /* Better font */
    font-size: 16px;  /* Font size */
    border-radius: 25px;  /* Rounded button */
    cursor: pointer;  /* Pointer cursor on hover */
    transition: background-color 0.3s ease, border-color 0.3s ease;  /* Smooth transition */
    display: inline-block;  /* Makes the button size depend on the content */
}

#myJourneyButtonCase:hover {
    background-color: #5F9EA0;  /* Darker bluer */
    border-color: #F0FFFF;  /* Light blue */
}

</style>


<p id="coolStuff">There are some cool stuff under here!!</p>




<!--This is the code for the HTML hacks -->

<style>
  #coolStuff{
    text-align: center;
    font-weight: 500;

  }
  #htmlHacksp1 {
    text-align: center;
    font-weight: 500;
  }
  #htmlHacksp2 {
    text-align: center;
    font-weight: 500;
  }
</style>


<div id="htmlHacksp1">
<p>
In the NBA, there are 30 teams. There are two confrences, the Eastern and Western Confrence. Along with that, there are also 3 divisions per confrenece. In the eastern confrence, the divisions are: Atlantic, Central, and Southeast. In the western confrence, the divisions are: Northwest, Pacific, and Southwest. Click this button to choose a team from the NBA!
</p>

<button id="randomTeamButton">Click here to get a random NBA team!</button>


<p id="teamOutput"></p>
</div>


<div id="htmlHacksp2">
<a id="link1" href="https://www.nba.com/teams">NBA Teams & Rosters!</a><br>
<a id="link2" href="https://www.espn.com/nba/story/_/id/40337422/nba-power-rankings-way-too-early-edition-our-post-finals-look-all-30-teams-2024-25">NBA Power Rankings for 2024-2025 season!</a>

<p>The first link takes you to all the NBA Teams and their rosters for the 2024-2025 season. The second link takes you to the power rankings for the 2024-2025 NBA season. Power rankings rank all the teams for the next season based on their new rosters. Power rankings are not always accurate due to in-season injuries, trades, and unexpected rises and dips in players' performances.
</p>
</div>


<script>
        // Array of NBA teams
        const nbaTeams = [
            "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", 
            "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", 
            "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", 
            "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", 
            "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", 
            "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", 
            "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", 
            "Utah Jazz", "Washington Wizards"
        ];

        // Function to get a random NBA team
        function getRandomTeam() {
            const randomIndex = Math.floor(Math.random() * nbaTeams.length);
            return nbaTeams[randomIndex];
        }

        // Event listener for button click
        document.getElementById("randomTeamButton").addEventListener("click", function() {
            const randomTeam = getRandomTeam();
            document.getElementById("teamOutput").textContent = randomTeam;
        });
    </script>






<head>
  <link rel="stylesheet" href="/student/assets/css/style.css">
</head>


<style>
  #randomTeamButton {
    background-color: #89CFF0;  /* Blue */
    border: 2px solid #5F9EA0;  /* Darker Blue */
    color: white;  /* White text */
    padding: 12px 24px;  /* Padding for the button */
    text-decoration: none;  /* Remove underline from link */
    font-family: 'Verdana', sans-serif;  /* Better font */
    font-size: 16px;  /* Font size */
    border-radius: 25px;  /* Rounded button */
    cursor: pointer;  /* Pointer cursor on hover */
    transition: background-color 0.3s ease, border-color 0.3s ease;  /* Smooth transition */
    display: inline-block;  /* Makes the button size depend on the content */
  }

  #randomTeamButton:hover {
      background-color: #5F9EA0;  /* Darker bluer */
      border-color: #F0FFFF;  /* Light blue */
  }
  #paragraph {
    text-align: center;
    font-weight: 500;
  }
</style>
  
  
  <div id="paragraph">
      <p id="text">The links are not switched.</p>
      <a id="switchLinkButton" onclick="switchText()" target="_blank">Click Me!!!</a>
  </div>


<script id="paragraph_text">
  function switchText() {
    
    let displayText = document.getElementById("text");
    
    let displayLink1 = document.getElementById("link1").href;
    let displayLink2 = document.getElementById("link2").href;

    let tempText1 = document.getElementById('link1').textContent;
    let temptext2 = document.getElementById('link2').textContent;

    let currentText = displayText.innerHTML;

    if (currentText === "The links are not switched.") {
      displayText.innerHTML = "Switched!";
      document.getElementById('link1').href = displayLink2;
      document.getElementById('link1').textContent = document.getElementById('link2').textContent;
      document.getElementById('link2').href = displayLink1;
      document.getElementById('link2').textContent = tempText1;
      
    } else {
      displayText.innerHTML = "The links are not switched.";
    }
  }
</script>


<style>

#switchLinkButton {
    background-color: #89CFF0;  /* Blue */
    border: 2px solid #5F9EA0;  /* Darker Blue */
    color: white;  /* White text */
    padding: 12px 24px;  /* Padding for the button */
    text-decoration: none;  /* Remove underline from link */
    font-family: 'Verdana', sans-serif;  /* Better font */
    font-size: 16px;  /* Font size */
    border-radius: 25px;  /* Rounded button */
    cursor: pointer;  /* Pointer cursor on hover */
    transition: background-color 0.3s ease, border-color 0.3s ease;  /* Smooth transition */
    display: inline-block;  /* Makes the button size depend on the content */
  }

  #switchLinkButton:hover {
      background-color: #5F9EA0;  /* Darker bluer */
      border-color: #F0FFFF;  /* Light blue */
  }

</style>
