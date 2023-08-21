import { useState } from 'react';

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);
  const [toolList, setToolList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');

  function handleNextClick() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Volta para o primeiro elemento
    }
  }

  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolList.length - 1); // Vai para o último elemento
    }
  }

  function handleAddClick() {
    if (inputValue) {
      setToolList([...toolList, inputValue]);
    }
  }

  return (
    <div className="container">
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolList[index]}</h2>
      <section className="btn-next-prev">
        <button onClick={handlePreviousClick}>Anterior</button>
        <button onClick={handleNextClick}>Próximo</button>
      </section>
      <section className="input">
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={({ target }) => setInputValue(target.value)} />
        <button onClick={ handleAddClick }>Adicionar</button>
      </section>
      <section className="list">
        <h3>Lista de itens do carrossel:</h3>
        <ul>
          {toolList.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
