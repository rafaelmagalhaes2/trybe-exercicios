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