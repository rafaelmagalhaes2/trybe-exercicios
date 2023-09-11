import { useState } from 'react';
import { images } from  '../data/data';

function Carrossel() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    if (index + 1 < images.length) {
        setIndex(index + 1);
    } else {
        setIndex(0); // Volta para o primeiro elemento
    }
  }

  function handlePreviousClick() {
    if (index - 1 >= 0) {
        setIndex(index - 1);
    } else {
        setIndex(images.length - 1); // Vai para o último elemento
    }
  }

  return (
    <div className="carrossel">

      <div className="title">
        <h2>{images[index].name}</h2>
      </div>

      <div className="slider">
        <img
            src={images[index].image}
            alt={images[index].name}
        />
      </div>
      
      <div className="buttons">
        <button onClick={handlePreviousClick}>Anterior</button>
        <button onClick={handleNextClick}>Próximo</button>
      </div>

    </div>
  );
}

export default Carrossel;