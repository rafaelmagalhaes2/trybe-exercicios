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

// Função para exibir as cotações na tela em colunas
function exibirCotacao(data) {
    const cotacaoDiv = document.getElementById('cotacao');
    cotacaoDiv.innerHTML = '';

    const cotacoes = data.rates;
    for (const moeda in cotacoes) {
        const valor = cotacoes[moeda].toFixed(2);

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card m-2';

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = moeda;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = `Valor: ${valor}`;

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardDiv.appendChild(cardBodyDiv);

        cotacaoDiv.appendChild(cardDiv);
    }
}

// Evento de submissão do formulário
document.getElementById('conversaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const moeda = document.getElementById('moeda').value;
    obterCotacao(moeda);
});