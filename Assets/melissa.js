
//The API key for OMDb provided below.
var OMDbAPIKey = "4145ebcc";

//An example of an actual search URL provided below
//http://www.omdbapi.com/?i=tt3896198&apikey=401e702d


var watchMovie = function(event) {
    event.preventDefault();
    var movieTitle = getElementById("search-input").value;
    //The OMDb API URL provided below.
    var OMDbAPIUrl = "http://www.omdbapi.com/?" + movieTitle + "apikey=" + OMDbAPIKey;

    //The OMDb Poster API URL provided below.
    var OMDbPosterAPIUrl = "http://img.omdbapi.com/?" + "apikey=" + OMDbAPIKey;

}

