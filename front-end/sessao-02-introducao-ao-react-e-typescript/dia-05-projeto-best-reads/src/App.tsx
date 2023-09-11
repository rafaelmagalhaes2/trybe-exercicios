import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookListType } from './types';
import Button from './components/Button';

type CurrentListType = 'wishList' | 'readingList' | 'readList';

function App() {
  const [currentBook, setCurrentBook] = useState(0);
  const [wishList, setWishList] = useState<BookListType>([]);
  const [readingList, setReadingList] = useState<BookListType>([]);
  const [readList, setReadList] = useState<BookListType>([]);
  const [currentList, setCurrentList] = useState<CurrentListType>('wishList');

  const lists = {
    wishList,
    readingList,
    readList,
  };

  function handleNextButton() {
    setCurrentBook((currentBook + 1) % data.length);
  }

  function handleRegisterWishesList() {
    setWishList([...wishList, data[currentBook]]);
  }

  function handleRegisterReadingList() {
    setReadingList([...readingList, data[currentBook]]);
  }

  function handleRegisterReadList() {
    setReadList([...readList, data[currentBook]]);
  }

  return (
    <div className="app">
      <div className="book-selector">

        <Book bookInfo={ data[currentBook] } showDetails />

        <div className="selector-buttons">

          <Button
            onClick={ () => handleRegisterWishesList() }
          >
            Adicionar à lista de desejos
          </Button>

          <Button
            onClick={ () => handleRegisterReadingList() }
          >
            Adicionar à lista de leitura
          </Button>

          <Button
            onClick={ () => handleRegisterReadList() }
          >
            Adicionar à lista de lidos
          </Button>

          <Button
            onClick={ () => handleNextButton() }
          >
            Próximo livro
          </Button>

        </div>
      </div>

      <div className="list-buttons">

        <Button
          onClick={ () => setCurrentList('wishList') }
        >
          Exibir lista de desejos
        </Button>

        <Button
          onClick={ () => setCurrentList('readingList') }
        >
          Exibir lista de leitura
        </Button>

        <Button
          onClick={ () => setCurrentList('readList') }
        >
          Exibir lista de lidos
        </Button>

      </div>
      <h1>Lista de ...</h1>
      <BookList books={ lists[currentList] } />
    </div>
  );
}

export default App;
