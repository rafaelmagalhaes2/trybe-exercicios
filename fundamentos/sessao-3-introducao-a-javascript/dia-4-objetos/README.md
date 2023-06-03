# :dart: Dia 4 - Objetos

## Exercícios :rocket:

### Exercício 1

/*  
    Crie uma variável chamada player e atribua a ela um objeto 
    que reúna todas as informações das variáveis listadas.
*/

const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

const player = {
  name: name,
  lastName: lastName,
  age: age,
  medals: medals,
  bestInTheWorld: bestInTheWorld,
};

###  Exercício 2

/* 
    Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, 
    concatene as informações e armazene na variável message no seguinte formato: 
    “A jogadora Marta Silva tem 34 anos de idade”.
*/

const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

const player = {
  name: name,
  lastName: lastName,
  age: age,
  medals: medals,
  bestInTheWorld: bestInTheWorld,
};

const message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`

console.log(message);

### Exercício 3

/*  
    Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] 
    e armazene na variável achievements a quantidade de títulos no seguinte 
    formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
*/

const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

const player = {
  name: name,
  lastName: lastName,
  age: age,
  medals: medals,
  bestInTheWorld: bestInTheWorld,
};

const achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`;

console.log(achievements);

### Exercício 4  

/*  
    Adicione as propriedades email, fone, userGithub e linkedIn ao objeto 
    customer (do exemplo anterior), chamando a função addProperty. 
*/

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
    if (typeof object[key] === 'undefined') {
        object[key] = value;
    }
};

addProperty(customer, 'email', 'noobcoder@gmail.com');
addProperty(customer, 'fone', '999 - 9999');
addProperty(customer, 'userGitHub', 'codadorNoob');
addProperty(customer, 'linkedin', 'https://linkedin.com/noobcodador');

console.log(customer);

## Exercício Manipulação de Objetos 1

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

## Exercício Manipulação de Objetos 2

/*  
    Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. 
    Atribua a essa chave um objeto que contenha as seguintes informações:
    
    {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
    }
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

    const newBook = {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
    };

    const addBook = (array, newbook) => { array.favoriteBooks.push(newbook) };

    addBook(reader, newBook);

    console.log(reader);

## Exercício Manipulação de Objetos 3

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