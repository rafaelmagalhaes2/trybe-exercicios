# Superhero API

A Superhero API é uma coleção de dados sobre super-heróis e vilões de vários universos, como quadrinhos e filmes. Ela oferece uma API RESTful para acessar informações sobre personagens famosos.
Endpoints Principais

1. Obter todos os Heróis: /all.json
2. Obter Herói por ID: /id/{id}.json
3. Procurar Heróis: /search/{name}.json
4. Herói Aleatório: /random.json

# Uso Exemplo

    **javascript**

    const URL_API = 'https://akabab.github.io/superhero-api/api';

    const generateNumber = () => Math.round(Math.random() * 1000);

    fetch(`${URL_API}/random.json`)
    .then((response) => response.json())
    .then((data) => {
        // Utilize os dados do herói/vilão conforme necessário
        console.log(data);
    })
    .catch((error) => {
        console.error('Erro ao obter herói:', error);
    });

# Formato da Resposta

A API retorna dados no formato JSON, incluindo informações como nome, estatísticas de poder, aparência, biografia, trabalho, conexões e URLs de imagens.

# Erros

Se um ID inválido for fornecido ou o herói/vilão solicitado não existir, a API retornará um código de status 404 Not Found junto com uma mensagem de erro apropriada.
