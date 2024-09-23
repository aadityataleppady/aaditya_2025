---
layout: page
title: iTunes API
permalink: /iTunesAPI/
comments: True
---

<h1>Click here to search for s song!</h1>
<input type="text" id="searchTerm" placeholder="Search for a song">
<button id="search_button" onclick="searchSongs()">Search</button>

<div id="songs"></div>

<script>
    function searchSongs() {
        const searchTerm = document.getElementById('searchTerm').value;
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=10`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const songsDiv = document.getElementById('songs');
                songsDiv.innerHTML = '';  // Clear previous results
                if (data.results.length > 0) {
                    data.results.forEach(song => {
                        const songDiv = document.createElement('div');
                        songDiv.classList.add('song');
                        songDiv.innerHTML = `
                            <img src="${song.artworkUrl100}" alt="Artwork">
                            <p><strong>Track:</strong> ${song.trackName}</p>
                            <p><strong>Artist:</strong> ${song.artistName}</p>
                            <audio controls src="${song.previewUrl}"></audio>
                        `;
                        songsDiv.appendChild(songDiv);
                    });
                } else {
                    songsDiv.innerHTML = 'No songs found.';
                }
            })
            .catch(error => console.error('Error fetching songs:', error));
    }
</script>

<style>

#search_button {
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

  #search_button:hover {
      background-color: #5F9EA0;  /* Darker bluer */
      border-color: #F0FFFF;  /* Light blue */
  }

  #searchTerm {
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

  #searchTerm:hover {
      background-color: #5F9EA0;  /* Darker bluer */
      border-color: #F0FFFF;  /* Light blue */
  }

</style>