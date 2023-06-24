// Elementos capturados
const botaoEnviar = document.querySelector('#submit-btn');
const botaoLimpar = document.querySelector('#clear-btn');
const checkBox = document.querySelector('#agreement');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const radios = document.querySelectorAll('.radio');
const textarea = document.getElementById('question');
const date = document.getElementById('date');
const promo = document.getElementById('promo');
const agreement = document.getElementById('agreement');

// Função enviar dados
const enviarDados = () => {
  botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();
  });
};
// Executa a função
enviarDados();

// Função para limpar o formulário
const limparFormulario = () => {
  botaoLimpar.addEventListener('click', () => {
    radios.forEach((radio) => { radio.checked = false; });
    fullName.value = '';
    email.value = '';
    textarea.value = '';
    date.value = '';
    promo.value = '';
    agreement.value = '';
  });
};
// Executa a função
limparFormulario();

// Função para habilitar e desabilitar botão Salvar
const buttonState = () => {
  checkBox.addEventListener('change', () => {
    botaoEnviar.disabled = false;
  });
  botaoEnviar.disabled = true;
};
// Executa a função
buttonState();

              