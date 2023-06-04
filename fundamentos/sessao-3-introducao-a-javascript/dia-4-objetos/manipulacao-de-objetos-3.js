
/*
    Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato: 

    Julia tem {quantidade} livros favoritos.”

    {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado 
    automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

    “Julia tem 1 livro favorito.”
*/

const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
        {
            title: 'O Senhor dos Anéis - a Sociedade do Anel',
            author: 'J. R. R. Tolkien',
            publisher: 'Martins Fontes',
        },
    ],
};

const message = `${reader.name} tem ${reader.favoriteBooks.length} livro favorito.`;

console.log(message);