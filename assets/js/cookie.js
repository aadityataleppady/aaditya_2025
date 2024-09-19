if (localStorage.getItem("breached") == null) {
    localStorage.setItem("breached", "0");
  } else if (localStorage.getItem("breached") == "1") {
    const img = document.getElementById("cookie");
    img.src = "../images/evilCookie.png";
  }
  if (localStorage.getItem("count") == null) {
    localStorage.setItem("count", "0");
  } else {
    document.getElementById("cookieCount").innerText =
      localStorage.getItem("count");
  }
  function reset() {
    if (localStorage.getItem("breached") == "0") {
      localStorage.setItem("count", "0");
      document.getElementById("cookieCount").innerText = "0";
    } else {
      alert("That won't help you now. 🤡 🍪");
    }
  }
  function bake() {
    localStorage.setItem("breached", "0");
    localStorage.setItem("count", "0");
    location.reload();
    localStorage.setItem("breached", "0");
    const img = document.getElementById("cookie");
    img.src = "../images/cookie.png";
  }
  function increaseCount() {
    if (parseInt(localStorage.getItem("count")) == 50) {
      const link = document.createElement("a");
      link.href = "../assets/downloads/cookieVirus.txt";
      link.download = "cookieVirus.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      localStorage.setItem("count", "9999999999");
      document.getElementById("cookieCount").innerText = "9999999999";
      const img = document.getElementById("cookie");
      img.src = "../images/cookie.png";
      localStorage.setItem("breached", "1");
    } else {
      var cookieAudio = new Audio("../assets/audio/mixkit-creepy-little-creature-2873.wav");
      cookieAudio.play();
      localStorage.setItem(
        "count",
        (parseInt(localStorage.getItem("count")) + 1).toString()
      );
      document.getElementById("cookieCount").innerText =
        localStorage.getItem("count");
    }
  }