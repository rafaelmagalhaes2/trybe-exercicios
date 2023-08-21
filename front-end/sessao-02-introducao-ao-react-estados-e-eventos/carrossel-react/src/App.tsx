import { useState } from 'react';

function App() {
   const toolKit = [
    {
      name: 'Porto Seguro BA',
      image: './src/assets/Passarela-do-Descobrimento.jpg',
    },
    {
      name: 'Cidade Histórica',
      image: './src/assets/cidade-historica-porto-seguro.jpg',
    },
    {
      name: 'Porto Seguro BA - PSG',
      image: './src/assets/conheca-porto-seguro.png',
    },
    {
      name: 'Porto Seguro BA - PSG 2',
      image: './src/assets/porto_seguro.jpg',
    }, 
    {
      name: 'Porto Seguro BA - PSG 3',
      image: './src/assets/porto_seguro.jpg',
    }, 
  ];

   const [index, setIndex] = useState(0);

function handleNextClick() {
  if (index + 1 < toolKit.length) {
    setIndex(index + 1);
  } else {
    setIndex(0); // Volta para o primeiro elemento
  }
}

function handlePreviousClick() {
  if (index - 1 >= 0) {
    setIndex(index - 1);
  } else {
    setIndex(toolKit.length - 1); // Vai para o último elemento
  }
}

 return (
   <main>
     <h1>Corrossel de imagens com REACT</h1>
     <h2>{toolKit[index].name}</h2>
     <img
        src={toolKit[index].image}
        alt={toolKit[index].name}
      /><br />
      <button onClick={handlePreviousClick}>Anterior</button>
      <button onClick={handleNextClick}>Próximo</button>
     </main>
   );
 }

 export default App;
