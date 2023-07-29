import Swal from 'sweetalert2';

// Get elements
const img = document.querySelector('#img');
const btnRandomDogs = document.querySelector('#dogs');
const btnRandomCats = document.querySelector('#cats');
const btnSurprise = document.querySelector('#surprise');

// Get End-points
const API_DOGS = 'https://dog.ceo/api/breeds/image/random';
const API_CATS = 'https://api.thecatapi.com/v1/images/search';

btnRandomDogs.addEventListener('click', () => {
    fetch(API_DOGS)
    .then((result) => result.json())
    .then((data) => {
      const url = data.message; 
      img.src = url;
    })
    .catch((error) => Swal.fire({
        title: 'Dog not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      }));
});

btnRandomCats.addEventListener('click', () => {
    fetch(API_CATS)
    .then((result) => result.json())
    .then(([data]) => {
        const url = data.url; 
        img.src = url;
    })
    .catch((error) => Swal.fire({
        title: 'Cat not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      }));
});

btnSurprise.addEventListener("click", () => {

    Promise.any([
      fetch(API_CATS),
      fetch(API_DOGS),
    ])
    .then((res) => res.json())
    .then((data) => {
      const url = data.message || data[0].url;
      img.src = url;
    });
});