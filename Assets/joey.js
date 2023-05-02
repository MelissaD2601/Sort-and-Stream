// Define variables for user choices
const genre = document.getElementById('genres').value;
const audience = document.getElementById('audience').value;
const duration = document.getElementById('duration').value;

// Define the URL for the API
var apiKey = '4145ebcc';
var omdbApiKey = '4145ebcc'
const url = "https://www.omdbapi.com/?apikey=4145ebcc";

// Fetch the movies data from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Get the div for displaying movies
    const movieDiv = document.querySelector('.movie');

    // Clear the div in case there are previous movies displayed
    movieDiv.innerHTML = '';

    // Loop through the movie data and create HTML elements to display the movies
    data.forEach(movie => {
      const movieTitle = document.createElement('h2');
      movieTitle.textContent = movie.title;

      const movieDescription = document.createElement('p');
      movieDescription.textContent = movie.description;

      const moviePoster = document.createElement('img');
      moviePoster.src = movie.poster;
      moviePoster.alt = '${movie.poster}';

      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie');

      movieContainer.appendChild(movieTitle);
      movieContainer.appendChild(movieDescription);
      movieContainer.appendChild(moviePoster);

      movieDiv.appendChild(movieContainer);
    });
  })
  .catch(error => {
    // Handle any errors that occur during fetching
    console.error('Error fetching movies data:', error);
  });





