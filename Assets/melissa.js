var searchButton = document.getElementById("search-button");

//The API key for OMDb provided below.
var OMDbAPIKey = "4145ebcc";

//An example of an actual search URL provided below
//http://www.omdbapi.com/?i=tt3896198&apikey=401e702d


var watchMovie = function(event) {
    event.preventDefault();
    var movieTitle = getElementById("title-input").value;
    //The OMDb API URL provided below.
    var OMDbAPIUrl = "http://www.omdbapi.com/?" + movieTitle + "apikey=" + OMDbAPIKey;
    //The OMDb Poster API URL provided below.
    var OMDbPosterAPIUrl = "http://img.omdbapi.com/?" + movieTitle + "apikey=" + OMDbAPIKey;
    console.log(movieTitle);

        fetch(OMDbAPIUrl)
            .then(function (response) {
            return response.json();
            })
            .then(function (data){
            console.log(data);
            })
        fetch(OMDbPosterAPIUrl)
            .then(function (response){
            return response.json();
            })
            .then(function (data){
            console.log(data)

            })

}

searchButton.addEventListener("click", watchMovie);