
// Criando dois novos elementos
let paragraph1 = document.createElement('p');
let paragraph2 = document.createElement('p');

// Aceita apenas strings
paragraph1.innerText = 'Um texto sem marcação HTML';

// O innerText aceita strings elementos HTML 
paragraph2.innerHTML = '<b>Um texto com marcação HTML</b>';

// Adiciona os novos elementos ao HTML
parent.appendChild(paragraph1);
parent.appendChild(paragraph2);