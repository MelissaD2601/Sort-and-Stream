
var OMDbAPIKey = "apikey=4145ebcc";
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var movieTitle = document.getElementById("movie-title");
var moviePlot = document.getElementById("movie-plot");
var movieSummary = document.getElementById("movie-summary");

var fetchMovieData = function(searchTerm) {
  var OMDbAPIUrl = `http://www.omdbapi.com/?${OMDbAPIKey}&t=${searchTerm}`;
  fetch(OMDbAPIUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      movieTitle.innerText = data.Title;
      moviePlot.innerText = data.Plot;
      movieSummary.innerText = data.Actors;
    })
    .catch(error => console.error(error));
};

var handleSearchSubmit = function(event) {
  event.preventDefault();
  var searchTerm = searchInput.value;
  fetchMovieData(searchTerm);
};

searchForm.addEventListener("submit", handleSearchSubmit);