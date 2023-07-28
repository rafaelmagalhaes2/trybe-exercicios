import Swal from 'sweetalert2';

const button = document.querySelector('#button');
const img = document.querySelector('#image');
const nick = document.querySelector('#name');

const URL_API = 'https://akabab.github.io/superhero-api/api';

const MAX_HEROES = 1000;

const generateNumber = () => Math.round(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = generateNumber();
  fetch(`${URL_API}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.images.md;
      nick.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas
      // você pode usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
