
//API Keys
var OMDbAPIKey = "apikey=4145ebcc";
var watchModeKey = "apiKey=OWgFxlMXkfOZpNjz00xvjEQCAU2PrQe8w24zUZCE"
//Variables that call search elements from HTML
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
//Varables used to call movie data elements from HTML
var movieTitle = document.getElementById("movie-title");
var moviePlot = document.getElementById("movie-plot");
var movieSummary = document.getElementById("movie-summary");
var moviePoster = document.getElementById("movie-poster");
var imdbNumber = document.getElementById("imdbID")
// Variables used to call streaming source information elements from HTML 
var streamingLink = document.getElementById("streaming-link")
var streamingTitle = document.getElementById("streaming-title")

//following function fetches a movie based on what the user inputs into the search input value
var fetchMovieData = function(searchTerm) {
  var OMDbAPIUrl = `http://www.omdbapi.com/?${OMDbAPIKey}&t=${searchTerm}`;
  fetch(OMDbAPIUrl)
    .then(response => response.json())
    .then(data => {
// Calls informaton from the OMDB API
      console.log(data);
      movieTitle.innerText = data.Title;
      moviePlot.innerText = data.Plot;
      movieSummary.innerText = data.Actors;
      moviePoster.src = data.Poster;
      imdbNumber.innerText = data.imdbID;
// Calls the fetch sreaming function 
      fetchStreamingSites(data.imdbID);
    })
    .catch(error => console.error(error));
};

// This functions fetches information from the Watchmode API it is called in the previous function so that the function is called after the fetchMovieData function to retrieve the imdbId.
var fetchStreamingSites = function(movieId){
    var watchModeURL = `https://api.watchmode.com/v1/title/${movieId}/sources/?${watchModeKey}`;
    fetch(watchModeURL)
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        streamingLink.href = data[0].web_url;
        streamingTitle.innerText = data[0].name;
    })
    .catch(error => console.error(error));
};

//Handles the search functionality 
var handleSearchSubmit = function(event) {
  event.preventDefault();
  // this variable what the user inputs into the search and returns its value
  var searchTerm = searchInput.value;
  fetchMovieData(searchTerm);

// Gets the search history from local storage
var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
// Add the new search term to the search history
var searchTerm = searchInput.value;
searchHistory.push(searchTerm);
// Save the updated search history to local storage
localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
};


searchForm.addEventListener("submit", handleSearchSubmit);
