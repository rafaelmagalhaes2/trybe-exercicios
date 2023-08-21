import React, { useState } from 'react';
import { calculateAge } from '../utils/age';

export default function CalculatorAge() {
  const [aniversario, setAniversario] = useState('');
  const [idade, setIdade] = useState<number | null>(null);

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAniversario(event.target.value);
  };

  const getCalculateAge = () => {
    const calculatedAge = calculateAge(aniversario);
    setIdade(calculatedAge);
  };

  return (
    <aside>
<<<<<<< HEAD
      <h1>Calculadora de Idade</h1>
      <label htmlFor="date">
        Ano de nascimento:
      </label>
=======
      <h1>Calcular Idade</h1>
      <label htmlFor="date">Ano de nascimento:</label>
>>>>>>> front-end/sessao-01-dia-02-exercicios-praticos
      <input
        id="date"
        type="date"
        value={ aniversario }
        onChange={ getValue }
      />
<<<<<<< HEAD
      <button className="button" onClick={ handleCalculateAge }>Calcular</button>
      {age !== null && (
        <p>{ age }</p>
=======
      <button className="button" onClick={ getCalculateAge }>Calcular</button>
      {idade !== null && (
        <p>{ idade }</p>
>>>>>>> front-end/sessao-01-dia-02-exercicios-praticos
      )}
    </aside>
  );
}
