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


## Exercício Manipulação de Objetos 4

    const order = {
        name: 'Luiz Silva',
        phoneNumber: '11-98763-1416',
        address: {
            street: 'Rua das Flores',
            number: '389',
            apartment: '701',
        },
        order: {
            pizza: {
                marguerita: {
                    amount: 1,
                    price: 25,
                },
                pepperoni: {
                    amount: 1,
                    price: 20,
                },
            },
            drinks: {
                coke: {
                    type: 'Coca-Cola Zero',
                    price: 10,
                    amount: 1,
                },
            },
            delivery: {
                deliveryPerson: 'Ana Silveira',
                price: 5,
            },
        },
        payment: {
            total: 50,
        },
    };

    /*
        Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, 
        entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, 
        Número: 389, AP: 701.'. 
    */
    const customerInfo = (fullOrder) => {

        const message = `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, 
        Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, 
        AP: ${fullOrder.address.apartment}.`;

        return message;
    };

    console.log(customerInfo(order));

    /*
        Complete a função orderModifier() para que seu retorno seja: 
        'Olá, Luiz Silva, o valor total de seu pedido de marguerita, 
        pepperoni e Coca-Cola Zero é R$ 50,00.'
    */
    const orderModifier = (fullOrder) => {

        // Usando o Object.keys() para pegar apenas as keys do array
        const pizzas = Object.keys(fullOrder.order.pizza).join(', ')

        const msg = `Olá, ${fullOrder.name}, o valor total do seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é de R$ ${fullOrder.payment.total},00.`;
        return msg;
    }

    console.log(orderModifier(order));

## Exercício Manipulação de Objetos 5

    const school = {
        lessons: [
        {
            course: 'Python',
            students: 20,
            professor: 'Carlos Patrício',
            shift: 'Manhã',
        },
        {
            course: 'Kotlin',
            students: 10,
            professor: 'Gabriel Oliva',
            shift: 'Noite',
        },
        {
            course: 'JavaScript',
            students: 738,
            professor: 'Gustavo Caetano',
            shift: 'Tarde',
        },
        {
            course: 'MongoDB',
            students: 50,
            shift: 'Noite',
        },
        ]
    };

    /*
        1. Crie uma função que obtenha o valor da chave de acordo com sua posição no array. 
    */
    const keyValues = (array, pos) => Object.values(array)[pos];

    // Passa o Objeto e a posição no array
    console.log(keyValues(school, 0));


    /* 
        2. Crie uma função que retorne a soma do número total de estudantes em todos os cursos. 
    */
    const totalStudents = (array) => { 
        
        let sum = 0;

        for( let i = 0; i < array.lessons.length; i += 1 ) {
            sum += array.lessons[i].students;
        }
        
        return sum;
    }

    /*
        3. Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave. 
    */