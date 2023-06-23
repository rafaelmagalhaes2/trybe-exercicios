const form = document.querySelector('form');
const inputTitle = form.querySelector('#title');
const inputCover = form.querySelector('#cover');
const inputWatched = form.querySelector('#watched');

function submitNewMovie(event) {
   
    event.preventDefault();
    
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    // Create Object
    const newMovie = {
        title: inputTitle.value,
        cover: inputCover.value,
        watched: inputWatched.checked
    }

    // Save object Array
    movies.push(newMovie);

    // Clear inputs
    inputTitle.value = '';
    inputCover.value = '';
    inputWatched.checked = false;   

    // Save objects localStorage
    localStorage.setItem('movies', JSON.stringify('movies'));

    // Redirection index.html
    location.href = '/index.html'
}

form.addEventListener('submit', submitNewMovie);