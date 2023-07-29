// Função para fazer a requisição à API de forma assíncrona com async/await
async function obterCotacao(moeda) {
  try {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${moeda}`);
    const data = await response.json();
    exibirCotacao(data);
  } catch (error) {
    console.error('Erro ao obter cotação:', error);
  }
}

function exibirCotacao(data) {
  const cotacaoDiv = document.getElementById('cotacao');
  cotacaoDiv.innerHTML = '';

  const cotacoes = data.rates;
  const cotacoesHtml = Object.entries(cotacoes).map(([moeda, valor]) => `
    <div class="card m-2">
        <div class="card-body">
            <h5 class="card-title">${moeda}</h5>
            <p class="card-text">Valor: ${valor.toFixed(2)}</p>
        </div>
    </div>
  `).join('');

  cotacaoDiv.innerHTML = cotacoesHtml;
}

// Evento de submissão do formulário
const form = document.getElementById('conversaoForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const moeda = document.getElementById('moeda').value;
  obterCotacao(moeda);
});