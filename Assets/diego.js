
var OMDbAPIKey = "apikey=4145ebcc";
var watchModeKey = "apiKey=OWgFxlMXkfOZpNjz00xvjEQCAU2PrQe8w24zUZCE"
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var movieTitle = document.getElementById("movie-title");
var moviePlot = document.getElementById("movie-plot");
var movieSummary = document.getElementById("movie-summary");
var moviePoster = document.getElementById("movie-poster");
var imdbNumber = document.getElementById("imdbID")
var streamingLink = document.getElementById("streaming-link")
var streamingTitle = document.getElementById("streaming-title")

//following function fetches a movie based on what the user inputs into the search input value
var fetchMovieData = function(searchTerm) {
  var OMDbAPIUrl = `http://www.omdbapi.com/?${OMDbAPIKey}&t=${searchTerm}`;
  fetch(OMDbAPIUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      movieTitle.innerText = data.Title;
      moviePlot.innerText = data.Plot;
      movieSummary.innerText = data.Actors;
      moviePoster.src = data.Poster;
      imdbNumber.innerText = data.imdbID;
      fetchStreamingSites(data.imdbID);
    })
    .catch(error => console.error(error));
};


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
}

var handleSearchSubmit = function(event) {
  event.preventDefault();
  // this variable what the user inputs into the search and returns its value
  var searchTerm = searchInput.value;
  fetchMovieData(searchTerm);
};

searchForm.addEventListener("submit", handleSearchSubmit);