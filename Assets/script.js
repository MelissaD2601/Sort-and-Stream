<<<<<<< HEAD

=======
>>>>>>> 428eb734fa0912bce1c501287ddf756fa2ce1609
const apiKey = 'Pn0bGCMnOet93HqybkUqUn0OYK12nKEUnQbrQBeP';

// Function to fetch movies data from the API
async function fetchMovies() {
  const response = await fetch(apiKey);
  const movies = await response.json();
  return movies;
}

// Function to render the movie list on the webpage
function renderMovies(movies) {
  const movieListEl = document.getElementById('movie-list');
  const movieListMarkup = movies.map(movie => "movie").join('');
  movieListEl.innerHTML = movieListMarkup;
}

// Fetch movies data from the API and render them on the webpage
fetchMovies()
  .then(movies => renderMovies(movies))
  .catch(error => console.error(error));
<<<<<<< HEAD

=======
>>>>>>> 428eb734fa0912bce1c501287ddf756fa2ce1609



var OMDbAPIKey = "http://www.omdbapi.com/?i=tt3896198&apikey=4145ebcc";

var genres = [];
var watchers ="";
var movLength = getElementbyId("duration");

//note


//Genres
// think about having a dropdown for the or click-box




//Watchers
//think about how you want the user to make the choices 



//Movie Length  


/*function findMovie() {
    


}


*/

//Output 
// create a place holder 

