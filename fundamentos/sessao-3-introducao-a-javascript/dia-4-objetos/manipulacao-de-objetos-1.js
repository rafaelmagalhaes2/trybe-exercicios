
/*
    Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: 
    “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
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

  const firstReader = reader.favoriteBooks[0].title;

  const message = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${firstReader}`;

  console.log(message);