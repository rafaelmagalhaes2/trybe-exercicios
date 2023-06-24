const form = document.querySelector('form');
const inputTitle = form.querySelector('#title');
const inputCover = form.querySelector('#cover');
const inputWatched = form.querySelector('#watched');

function submitNewMovie(event) {
   
    event.preventDefault();
    
    const moviesLibrary = JSON.parse(localStorage.getItem('movies')) || [][];

    // Create Object
    const newMovie = {
        title: inputTitle.value,
        cover: inputCover.value,
        watched: inputWatched.checked
    }

    // Save object Array
    moviesLibrary.push(newMovie);

    console.log(moviesLibrary);

    // Clear inputs
    inputTitle.value = '';
    inputCover.value = '';
    inputWatched.checked = false;   

    // Save objects localStorage
    localStorage.setItem('movies', JSON.stringify('moviesLibrary'));

    // Redirection index.html
    location.href = '/index.html';
}

form.addEventListener('submit', submitNewMovie);